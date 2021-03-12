/**
 *
 * @param data
 * this is the data list containing the time and OHCL values
 */
import {settings, customSettings, userCoefficient} from "./settings";
import {globals} from "./globals";
import {Methods} from "./methods";

export function coordinateFromData(data = [], dimensions) {
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
     * do there exist any data to be rendered
     */
/*
    let anyLastDefinedTime = sanitizeRecord(data[dataEnd]);
    anyLastDefinedTime = anyLastDefinedTime?(anyLastDefinedTime.time||anyLastDefinedTime.date):'';
    globals.ultimateTotalXScale = {};

    anyLastDefinedTime = Methods.getFinalDate(anyLastDefinedTime, myCanvas.x);
    anyLastDefinedTime.setDate(anyLastDefinedTime.getDate() - viableTimeRecords);
    globals.ultimateTotalXScale[start] = anyLastDefinedTime.toLocaleString();

    for (let i = start+globals.approximateCandleWidth; i < dimensions.w+globals.approximateCandleWidth;i+=globals.approximateCandleWidth){
        anyLastDefinedTime = Methods.getFinalDate(anyLastDefinedTime, i);
        anyLastDefinedTime.setDate(anyLastDefinedTime.getDate()+1);
        globals.ultimateTotalXScale[i] = anyLastDefinedTime.toLocaleString();
    }*/
    /*let lastDefinedTime = "";
    for (let i = start+globals.approximateCandleWidth; i < dimensions.w+globals.approximateCandleWidth;i+=globals.approximateCandleWidth){
        lastDefinedTime = Methods.getFinalDate(lastDefinedTime, i);
        lastDefinedTime.setDate(lastDefinedTime.getDate()+1);
        globals.ultimateTotalXScale[i] = lastDefinedTime.toLocaleString();
    }
*/
    globals.ultimateTotalXScale = {};
    let lastDefinedTime = sanitizeRecord(data[dataEnd]);
    lastDefinedTime = lastDefinedTime?(lastDefinedTime.time||lastDefinedTime.date):'';
    lastDefinedTime = Methods.getFinalDate(lastDefinedTime);
    globals.ultimateTotalXScale[x_coord_end] = {time: lastDefinedTime.toLocaleString()};

    for (let i = x_coord_end + globals.approximateCandleWidth; i < dimensions.w; i+=globals.approximateCandleWidth) {
        lastDefinedTime = Methods.getFinalDate(lastDefinedTime, i);
        lastDefinedTime.setDate(lastDefinedTime.getDate()+1);
        globals.ultimateTotalXScale[i] = {time: lastDefinedTime.toLocaleString()};
    }
    if (dataEnd>0) {
        let record = {},
            coordinate = {};
        if (viableTimeRecords) {
            /**
             * the list of records.high and .low
             * useful for finding y scale
             * @type {*[]}
             */
            let highs = [], lows = [];

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
                record = sanitizeRecord(record);
                increase = record.close > record.open;
                coordinate = _coordinate(
                    x_coord_end - customSettings.candleStick.barWidth / 2,
                    increase,
                    record
                );
                globals.ultimateTotalXScale[x_coord_end] = {time: Methods.getFinalDate(record.date).toLocaleString()};
                x_coord_end -= globals.approximateCandleWidth;
                /**
                 * start getting coordinates from the last record towards the first
                 * @type {*}
                 */

                globals.all_coordinates.push(coordinate);
                highs.push(record.high);
                lows.push(record.low);
            }
            if (x_coord_end>start){
                lastDefinedTime = sanitizeRecord(data[dataEnd-i]);
                lastDefinedTime = lastDefinedTime?(lastDefinedTime.time||lastDefinedTime.date):'';
                lastDefinedTime = Methods.getFinalDate(lastDefinedTime);
                globals.ultimateTotalXScale[x_coord_end] = {time: lastDefinedTime.toLocaleString()};
                for (let i = x_coord_end; i < dimensions.w; i-=globals.approximateCandleWidth) {
                    lastDefinedTime = Methods.getFinalDate(lastDefinedTime, i);
                    lastDefinedTime.setDate(lastDefinedTime.getDate()-1);
                    globals.ultimateTotalXScale[i] = {time: lastDefinedTime.toLocaleString()};
                }

            }
            let yLimits = {y1: Math.min(...lows), y2: Math.max(...highs)};
            y_feed(yLimits, globals.all_coordinates);
            /*bestPriceScale(10);
            drawScaleLines(ctx5);*/
        }
        return globals.all_coordinates;
    }
}

function candle_settings(increase = false, record = {}) {
    record = sanitizeRecord(record);
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

export function getBestPriceScale(maxTicks = 10, dimensions){
    let visiblePriceRange = dimensions.h/globals.y_division;
    let lowest = globals.highestTop - visiblePriceRange;
    globals.yAxisList = niceScale(lowest,globals.highestTop,maxTicks, globals.yAxisList);
    return globals.yAxisList;
}

function niceScale( minPoint, maxPoint, maxTicks){
    const niceNum = ( localRange,  round) => {
        let exponent,fraction,niceFraction;
        exponent = Math.floor(Math.log10(localRange));
        fraction = localRange / Math.pow(10, exponent);
        if (round) {
            if (fraction < 1.5) niceFraction = 1;
            else if (fraction < 3) niceFraction = 2;
            else if (fraction < 7) niceFraction = 5;
            else niceFraction = 10;
        } else {
            if (fraction <= 1) niceFraction = 1;
            else if (fraction <= 2) niceFraction = 2;
            else if (fraction <= 5) niceFraction = 5;
            else niceFraction = 10;
        }
        return niceFraction * Math.pow(10, exponent);
    };
    const lst = [];
    const range = niceNum(maxPoint - minPoint, false);
    const stepSize = niceNum(range / (maxTicks - 1), true);
    const lBound = Math.floor(minPoint / stepSize) * stepSize;
    const uBound = Math.ceil(maxPoint / stepSize) * stepSize;
    for(let i=lBound;i<=uBound;i+=stepSize) {lst.push(i)}
    return lst
}

export function getBestTimeScale(maxTicks, dimensions){
    let visibleTimeRange = dimensions.w/globals.approximateCandleWidth;
    let lowest = 0;
    globals.xAxisList = niceScale(lowest, visibleTimeRange,maxTicks, globals.xAxisList);
    globals.xAxisScaleRange = (globals.xAxisList[1]-globals.xAxisList[0])*globals.approximateCandleWidth;
    return globals.xAxisList;
}


/*
function bestTimeScale(maxTicks){
    let visibleTimeRange = dimensions.w/globals.approximateCandleWidth;
    let lowest = 0;
    globals.xAxisList = niceScale(lowest, visibleTimeRange,maxTicks, globals.xAxisList);
    return globals.xAxisList;
}

function drawScaleLines(ctx){
    ctx.clearRect(0, 0, settings.canvas.main_canvas_back_view.dimensions.w, settings.canvas.main_canvas_back_view.dimensions.h);
    ctx2.clearRect(0, 0, settings.canvas.priceCanvasTopView.dimensions.w, settings.canvas.priceCanvasTopView.dimensions.h);
    ctx6.clearRect(0, 0, settings.canvas.time_canvas_main.dimensions.w, settings.canvas.time_canvas_main.dimensions.h);
    drawHorizontalScaleLines(ctx);
    drawVerticalScaleLines(ctx);
}

function drawHorizontalScaleLines(ctx){
    let itemX = 0, n = 0, current = globals.xAxisList[0], txt = '';
    for (let i = 1;i<globals.xAxisList.length;i++) {
        n = (current*globals.approximateCandleWidth)+scale_coordinate_offset;
        itemX = getClosestXTimeDivision(n);
        if (itemX) {
            txt = `${globals.ultimateTotalXScale[itemX].split(",")[0]}`;
            itemX -= customSettings.candleStick.barWidth / 2;
            ctx.beginPath();
            ctx.moveTo(itemX, 0);
            ctx.lineTo(itemX, settings.canvas.main_canvas_back_view.dimensions.h);
            // ctx.setLineDash([5, 3]);
            ctx.strokeStyle = "black";
            ctx.stroke();
            ctx.lineWidth = .2;
            renderTimeAt(itemX, txt, ctx6);
        }
        current = globals.xAxisList[i];
    }
}
function drawVerticalScaleLines(ctx){
    let current = globals.yAxisList[0], itemY = 0, txt = '';
    for (let i = 1;i<globals.yAxisList.length;i++) {
        itemY = priceToCoordinate(current);
        ctx.beginPath();
        ctx.moveTo(0, itemY);
        ctx.lineTo(settings.canvas.main_canvas_back_view.dimensions.w, itemY);
        // ctx.setLineDash([5, 3]);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.lineWidth = .2;

        txt = `${current}`;
        renderPriceAt(itemY, txt, ctx2);

        current = globals.yAxisList[i];
    }
}

function renderTimeAt(itemX, txt, ctx) {
    ctx.beginPath();
    ctx.moveTo(itemX, 0);
    ctx.lineTo(itemX, 3);
    ctx.strokeStyle = "black";
    ctx.lineWidth = customSettings.barGraph.ticks;
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(txt, itemX-10, settings.canvas.time_canvas_main.dimensions.h/2);
    ctx.fill();
}

function renderPriceAt(itemY, txt, ctx) {
    ctx.beginPath();
    ctx.moveTo(0, itemY);
    ctx.lineTo(3, itemY);
    ctx.strokeStyle = "black";
    ctx.lineWidth = customSettings.barGraph.ticks;
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.font = "15px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(txt, settings.canvas.priceCanvasTopView.dimensions.w/2, itemY+5);
    ctx.fill();
}*/

function toNumber(n) {
    return parseFloat(n);
}

function sanitizeRecord(record) {
    let r = {};
    for (let i in record){
        if (record.hasOwnProperty(i)) {
            r[i.toLowerCase()] = record[i];
        }
    }
    record = r;
    record.high = toNumber(record.high);
    record.open = toNumber(record.open);
    record.low = toNumber(record.low);
    record.close = toNumber(record.close);
    return record;
}