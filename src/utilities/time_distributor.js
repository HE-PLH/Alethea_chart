import {globals} from "./globals";
import {customSettings, settings, userCoefficient} from "./settings";
import {Methods} from "./methods";

export function priceToCoordinate(price) {
    return ((globals.highestTop - price)*globals.y_division);
}

export function drawMarkLinesAt(coordinate, dimension, x_scale_dimensions, y_scale_dimensions, barWidth, setRecord) {
    let x = getClosestXTimeDivision(coordinate.x);
    if (x) {
        let date = globals.ultimateTotalXScale[x].time;
        let record = globals.ultimateTotalXScale[x].record;
        let y = coordinateToPrice(coordinate.y);
        x -= barWidth / 2;
        drawIndicatorMarkLines(globals.main_canvas_back_view_context, x, coordinate.y, dimension);
        renderCurrentTimeLabel(globals.time_canvas_top_view_context, x, y, date, x_scale_dimensions);
        // console.log(globals.price_canvas_main_view_context)
        renderCurrentPriceLabel(globals.price_canvas_top_view_context, x, coordinate.y, `${y.toFixed(2)}`, y_scale_dimensions);
        return record;
    }
}


function renderCurrentPriceLabel(ctx, x, y, txt, dimension) {
    // ctx.clearRect(0,0, dimension.w, dimension.h);
    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.fillRect(0, y-10, dimension.w, 20);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(txt, dimension.w/2, y+5);
    ctx.fill();

}


function renderCurrentTimeLabel(ctx, x, y, date, dimension) {
    // ctx.clearRect(0,0, dimension.w, dimension.h);
    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.fillRect(x-65, 0, 130, dimension.h-10);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(date?date:'', x, dimension.h/2);
    ctx.fill();

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


function drawIndicatorMarkLines(ctx, x = 0, y = 0, dimension) {
    ctx.beginPath();
    ctx.setLineDash([5, 3]);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.moveTo(0, y);
    ctx.lineTo(dimension.w, y);
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
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
        customSettings.candleStick.barWidth-=userCoefficient.zoomOut;
        /*
         * careful now, zooming into negative values is a bad idea
         */
        /*if (customSettings.candleStick.barWidth>0) {
            draw();
        }*/

    },
    scrollLeft: ()=>{
        customSettings.timeScale.rightOffset+=userCoefficient.scrollLeft;
    },
    scrollRight: ()=>{
        customSettings.timeScale.rightOffset-=userCoefficient.scrollRight;
    }
};
