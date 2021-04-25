import {globals} from "./globals";
import {customSettings, settings, userCoefficient} from "./settings";
import {Methods} from "./methods";

export function priceToCoordinate(price) {
    return ((globals.highestTop - price)*globals.y_division);
}

export function drawMarkLinesAt(x, coordinate, dimension, x_scale_dimensions, y_scale_dimensions, barWidth, flag) {
    if (x) {
        let date = globals.ultimateTotalXScale[x].time;
        let record = globals.ultimateTotalXScale[x].record;
        let y = coordinateToPrice(coordinate.y);
        x -= barWidth / 2;
        // if(x>=globals.markDraw.x) {
            drawYIndicatorMarkLines(globals.main_canvas_back_view_context, x, dimension);
        // }
        drawXIndicatorMarkLines(globals.main_canvas_back_view_context, coordinate.y, dimension);
        renderCurrentTimeLabel(globals.time_canvas_top_view_context, x, y, date, x_scale_dimensions);
        // console.timeEnd("lines");
        // console.time("time");

        // console.timeEnd("time");
        // console.time("price");
        renderCurrentPriceLabel(globals.price_canvas_top_view_context, x, coordinate.y, `${y.toFixed(2)}`, y_scale_dimensions);
        // console.timeEnd("price");
        // globals.markDraw = {x}
        return record;
    }
}


function renderCurrentPriceLabel(ctx, x, y, txt, dimension) {
    // ctx.clearRect(0,0, dimension.w, dimension.h);
    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.fillRect(0, y-10, dimension.w, 20);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(txt, dimension.w/2, y+5);
    ctx.fill();
    ctx.closePath();

}


function renderCurrentTimeLabel(ctx, x, y, date, dimension) {
    // ctx.clearRect(0,0, dimension.w, dimension.h);
    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.fillRect(x-65, 0, 130, dimension.h-10);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(date?date:'', x, dimension.h/2);
    ctx.fill();
    ctx.closePath();

}


export function getClosestXTimeDivision(x) {
    let min = [], u = [], v = 0;

    for (let i in globals.ultimateTotalXScale){
        if ((v =Math.abs(x+globals.approximateCandleWidth/2-i))<=globals.approximateCandleWidth){
            min.push(i);
            u.push(v);
        }
    }
    return min[u.indexOf(Math.min(...u))];
}

function coordinateToPrice(yCoordinate) {
    return globals.highestTop - ((yCoordinate) / globals.y_division)
}


function drawXIndicatorMarkLines(ctx, y = 0, dimension) {
    ctx.beginPath();
    ctx.setLineDash([5, 3]);
    ctx.strokeStyle = customSettings.marks.color;
    ctx.lineWidth = customSettings.marks.lineWidth;
    ctx.moveTo(0, y);
    ctx.lineTo(dimension.w, y);
    ctx.stroke();
    ctx.closePath();
}
function drawYIndicatorMarkLines(ctx, x = 0, dimension) {
    ctx.beginPath();
    ctx.setLineDash([5, 3]);
    ctx.strokeStyle = customSettings.marks.color;
    ctx.lineWidth = customSettings.marks.lineWidth;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, dimension.h);
    ctx.stroke();
    ctx.closePath();
}


export let x_axis = {
    zoomIn: ()=>{
        customSettings.candleStick.barWidth+=userCoefficient.zoomIn;
        /*
         * careful now, zooming into negative values is a bad idea
         */

    },
    resetChart: ()=>{
        customSettings = Methods.getObjectCopy(settings.default);
    },

    zoomOut: ()=>{
        if(customSettings.candleStick.barWidth>2) {
            customSettings.candleStick.barWidth -= userCoefficient.zoomOut;
        }else {
            customSettings.candleStick.barWidth=2
        }
        /*
         * careful now, zooming into negative values is a bad idea
         */
        /*if (customSettings.candleStick.barWidth>0) {
            draw();
        }*/

    },
    scrollLeft: ()=>{
        customSettings.timeScale.rightOffset+=/*userCoefficient.scrollLeft*/globals.approximateCandleWidth;
    },
    scrollRight: ()=>{
        customSettings.timeScale.rightOffset-=/*userCoefficient.scrollRight*/globals.approximateCandleWidth;
    }
};
