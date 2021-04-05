import {settings, customSettings, userCoefficient} from "./settings";
import {globals} from "./globals";
import {Methods} from "./methods";
import {clearCoordinates} from "./clear-ctx";
import { niceScale } from "./niceScale";

/**
 *
 * @param data
 * this is the data list containing the time and OHCL values
 * @param dimensions
 * is the main chart view canvas dimension
 */
export function coordinateFromData(data = [], dimensions) {
    /**
     * clear previously drawn/painted coordinates only for optimal performance
     */
    if(globals.all_coordinates){
        clearCoordinates(globals.all_coordinates, dimensions);
    }
    globals.all_coordinates = [];
    /**
     * getting rightOffset and topOffset, which is the distance in coordinates from the right/top of canvas
     * @type {number}
     */
    let right = -customSettings.timeScale.rightOffset;
    /**
     * maxwidth, which is the occupy-able width space in the canvas
     * difference in canvas width and users' preferred width/height
     * @type {number}
     */
    let maxWidth = dimensions.w + right;
    customSettings.yScale.yTopLimit+=customSettings.yScale.top_offset;
    customSettings.yScale.yBottomLimit+=customSettings.yScale.top_offset;
    /**
     * discardable coordinates, => the coordinates which shall not be rendered regardless of the data being available
     * @type {number}
     */
    let discardableCoordinates = maxWidth - dimensions.w;
    /**
     * myCanvas is the typical drawing area
     * @type {{x: (number), y: number}}
     */

    let myCanvas = {
        x: discardableCoordinates>0?dimensions.w:maxWidth,
        y: maxWidth - dimensions.y,
    };
    /**
     * if rightmost/final coordinates in data shall be rendered then no discardable coordinates,
     * @type {number}
     */
    discardableCoordinates = discardableCoordinates>0?discardableCoordinates:0;
    /**
     * time records that wont be rendered
     * @type {number}
     */
    let voidTimeRecords = Math.floor(discardableCoordinates / globals.approximateCandleWidth);
    let lastHalfCoordinates = discardableCoordinates % globals.approximateCandleWidth;
    myCanvas.x+=lastHalfCoordinates;
    /**
     * the index from zero in the data past which no more data is to be rendered. the minus 1 is to unite quantity and index
     * @type {number}
     */
    let dataEnd = data.length -  1 - voidTimeRecords;
    /**
     * the full candle bars representing fully rendered data record
     * @type {number}
     */
    let viableTimeRecords = Math.ceil(myCanvas.x / globals.approximateCandleWidth);
    let x_coord_end = myCanvas.x;
    let start = x_coord_end - viableTimeRecords*globals.approximateCandleWidth;
        /**
         * does the difference in close and open markets show increase or decrease?
         * @type {boolean}
         */
        let increase = false;

    /**
     * ultimateTotalXScale is the carrier of logical x coordinates, useful when hovering current coordinate candle stick/bar info
     * @type {{}}
     */
    globals.ultimateTotalXScale = {};
    let lastDefinedTime = (data[dataEnd]);
    globals.ultimateTotalXScale[x_coord_end] = {record: lastDefinedTime};
    lastDefinedTime = lastDefinedTime?(lastDefinedTime.time||lastDefinedTime.date):'';
    lastDefinedTime = Methods.getFinalDate(lastDefinedTime);
    globals.ultimateTotalXScale[x_coord_end].time =  lastDefinedTime.toLocaleString();
    
    for (let i = x_coord_end + globals.approximateCandleWidth; i < dimensions.w; i+=globals.approximateCandleWidth) {
        lastDefinedTime = Methods.getFinalDate(lastDefinedTime);        
        lastDefinedTime.setDate(lastDefinedTime.getDate()+1);
        globals.ultimateTotalXScale[i] = {time: lastDefinedTime.toLocaleString()};
    }
     /**
     * is there any data to be rendered
     */
    if (dataEnd>0) {
        let record = {},
            coordinate = {};
        if (viableTimeRecords) {
            /**
             * the list of records.high and .low
             * useful for finding y scale
             * @type {*[]}
             */
            let highs = [], lows = [], volume = [];

            /**
             * get coordinates for full renderable candle bars
             */
            let i = 0;
            for (i = 0; i < viableTimeRecords; i++) {
                /**
                 * only render the records if they exist, ie. dataEnd>0
                 */
                if (i > dataEnd) {
                    break;
                }
                record = data[dataEnd - i];
                increase = record.increase;
                coordinate = _coordinate(
                    x_coord_end - customSettings.candleStick.barWidth / 2,
                    increase,
                    record
                );
                globals.ultimateTotalXScale[x_coord_end] = {record};
                globals.ultimateTotalXScale[x_coord_end].time = Methods.getFinalDate(record.date).toLocaleString();
                x_coord_end -= globals.approximateCandleWidth;

                globals.all_coordinates.push(coordinate);
                highs.push(record.high);
                lows.push(record.low);
                volume.push(record.volume);
            }
            /**
             * what if you have space on the left to show old values but no data
             * in this case we need to guess the possible date values
             */
            if (x_coord_end>start){
                lastDefinedTime = (data[dataEnd-i+1]);
                globals.ultimateTotalXScale[x_coord_end] = {record: lastDefinedTime};
                lastDefinedTime = lastDefinedTime?(lastDefinedTime.time||lastDefinedTime.date):'';
                lastDefinedTime = Methods.getFinalDate(lastDefinedTime);
                globals.ultimateTotalXScale[x_coord_end].time=lastDefinedTime.toLocaleString();
                for (let i = x_coord_end; i > start; i-=globals.approximateCandleWidth) {
                    lastDefinedTime = Methods.getFinalDate(lastDefinedTime);
                    lastDefinedTime.setDate(lastDefinedTime.getDate()-1);
                    globals.ultimateTotalXScale[i] = {time: lastDefinedTime.toLocaleString()};
                }

            }
            /**
             * get the y limits so as to fit the graph as required
             * @type {{y1: *, y2: *}}
             */
            let yLimits = {y1: Math.min(...lows), y2: Math.max(...highs)};
            let volumeLimits = {y1: Math.min(...volume), y2: Math.max(...volume)};
            y_feed(yLimits, globals.all_coordinates);
            volume_feed(volumeLimits, globals.all_coordinates);
        }
        return globals.all_coordinates;
    }
}

/**
 * how do we show the increasing or decreasing stick?
 * @param increase
 * @param record
 * @returns {{wickTopDisplay: boolean, borderColor: (*), color: (*), wickBottomDisplay: boolean, wickColor: (*)}}
 */
function candle_settings(increase = false, record = {}) {
    record = (record);
    return  {
        borderColor: increase ? customSettings.candleStick.increaseColor : customSettings.candleStick.decreaseColor,
        wickColor: increase ? customSettings.candleStick.wickIncreaseColor : customSettings.candleStick.wickDecreaseColor,
        wickTopDisplay: increase ? ((record.high - record.close) > 0) : ((record.high - record.open) > 0),
        wickBottomDisplay: increase ? ((record.open - record.low) > 0) : ((record.close - record.low) > 0),
        color: increase ? customSettings.candleStick.increaseColor : customSettings.candleStick.decreaseColor,
    }
}
function _coordinate(wick = 0, increase = false, record = []) {
    return  {
        wick: {
            x: wick,
        },
        candle_settings: candle_settings(increase, record),
        record: record,
        increase: increase
    };
}

/**
 * add volume values to the coordinate list
 * @param volumeLimits
 * @param obj
 */
function volume_feed(volumeLimits, obj) {
    let volume_range = volumeLimits.y2 - volumeLimits.y1, record = {};
    let chartYRange = customSettings.volume_scale.volumeBottomLimit-customSettings.volume_scale.volumeTopLimit;
    globals.volume_division = (1 / volume_range) * chartYRange;

    let val =(v1)=>{
        return (v1*globals.volume_division)+ customSettings.volume_scale.top_offset;
    };

    for (let i = 0; i < obj.length; i++) {
        record = obj[i].record;
        obj[i].volume = val(volumeLimits.y2 - record.volume);
    }    
}

/**
 * add y values to the coordinate list
 * @param yLimits
 * @param obj
 */

function y_feed(yLimits, obj) {
    let yrange = yLimits.y2 - yLimits.y1, record = {};
    let chartYRange = customSettings.yScale.yBottomLimit-customSettings.yScale.yTopLimit;
    globals.y_division = (1 / yrange) * chartYRange;
    let val =(v1)=>{
        return (v1*globals.y_division)+ customSettings.yScale.top_offset;
    };
    for (let i = 0; i < obj.length; i++) {
        record = obj[i].record;
        obj[i].wick.y1 = val(yLimits.y2 - record.high);
        if (obj[i].increase) {
            obj[i].wick.y2 = val(yLimits.y2 - record.close);
            obj[i].wick.y3 = val(yLimits.y2 - record.open);
        } else {
            obj[i].wick.y2 = val(yLimits.y2 - record.open);
            obj[i].wick.y3 = val(yLimits.y2 - record.close);
        }
        obj[i].wick.y4 = val(yLimits.y2 - record.low);
    }
    record = obj[0];
    if (record) {
        globals.highestTop = (record.wick.y1 * yrange / chartYRange) + record.record.high;
    }
}

/**
 * we need a scale that adjusts itself to show right y/x values shown in the graph dynamically
 * @param maxTicks
 * @param dimensions
 * @returns {[]}
 */

export function getBestPriceScale(maxTicks = 10, dimensions){
    let visiblePriceRange = dimensions.h/globals.y_division;
    let lowest = globals.highestTop - visiblePriceRange;
    globals.yAxisList = niceScale(lowest,globals.highestTop,maxTicks, globals.yAxisList);
    return globals.yAxisList;
}

export function getBestTimeScale(maxTicks, dimensions){
    let visibleTimeRange = dimensions.w/globals.approximateCandleWidth;
    let lowest = 0;
    globals.xAxisList = niceScale(lowest, visibleTimeRange,maxTicks, globals.xAxisList);
    globals.xAxisScaleRange = (globals.xAxisList[1]-globals.xAxisList[0])*globals.approximateCandleWidth;
    return globals.xAxisList;
}


