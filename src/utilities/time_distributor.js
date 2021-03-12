import {globals} from "./globals";

export function priceToCoordinate(price) {
    return ((globals.highestTop - price)*globals.y_division);
}

export function drawMarkLinesAt(coordinate, dimension, x_scale_dimensions, y_scale_dimensions, barWidth) {
    let x = getClosestXTimeDivision(coordinate.x);
    if (x) {
        let date = globals.ultimateTotalXScale[x].time;
        let y = coordinateToPrice(coordinate.y);
        x -= barWidth / 2;
        drawIndicatorMarkLines(globals.main_canvas_back_view_context, x, coordinate.y, dimension);
        renderCurrentTimeLabel(globals.time_canvas_top_view_context, x, y, date, x_scale_dimensions);
        // console.log(globals.price_canvas_main_view_context)
        renderCurrentPriceLabel(globals.price_canvas_top_view_context, x, coordinate.y, `${y.toFixed(2)}`, y_scale_dimensions);
    }
}


function renderCurrentPriceLabel(ctx, x, y, txt, dimension) {
    ctx.clearRect(0,0, dimension.w, dimension.h);
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.fillRect(0, y-10, dimension.w, 20);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(txt, dimension.w/2, y+5);
    ctx.fill();

}


function renderCurrentTimeLabel(ctx, x, y, date, dimension) {
    ctx.clearRect(0,0, dimension.w, dimension.h);
    ctx.beginPath();
    ctx.fillStyle = "blue";
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
    ctx.clearRect(0,0, dimension.w, dimension.h);
    ctx.setLineDash([5, 3]);
    ctx.strokeStyle = "blue";
    ctx.lineWidth = .5;

    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(dimension.w, y);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, dimension.h);
    ctx.stroke();
    ctx.closePath();
}

/*
let x_axis = {
    zoomIn: ()=>{
        bestTimeScale(10);
        xAxisScaleRange = (xAxisList[1]-xAxisList[0])*approximateCandleWidth;
        customSettings.candleStick.barWidth+=userCoefficient.zoomIn;
        /!**
         * careful now, zooming into negative values is a bad idea
         *!/
        approximateCandleWidth = customSettings.candleStick.barWidth + customSettings.timeScale.barSpacing;
        draw();
    },
    zoomOut: ()=>{
        bestTimeScale(10);
        xAxisScaleRange = (xAxisList[1]-xAxisList[0])*approximateCandleWidth;
        customSettings.candleStick.barWidth-=userCoefficient.zoomOut;
        /!**
         * careful now, zooming into negative values is a bad idea
         *!/
        approximateCandleWidth = customSettings.candleStick.barWidth + customSettings.timeScale.barSpacing;
        if (customSettings.candleStick.barWidth>0) {
            draw();
        }
    },
    scrollLeft: ()=>{
        customSettings.timeScale.rightOffset+=userCoefficient.scrollLeft;
        draw();
    },
    scrollRight: ()=>{
        customSettings.timeScale.rightOffset-=userCoefficient.scrollRight;
        draw();
    },
    reset: ()=>{
        customSettings = Methods.getObjectCopy(settings.default);
        approximateCandleWidth = customSettings.candleStick.barWidth + customSettings.timeScale.barSpacing;
        draw();
    }
};

function getClosestXTimeDivision(x) {
    let min = [], u = [], v = 0;
    for (let i in ultimateTotalXScale){
        if ((v =Math.abs(x-10-i))<=approximateCandleWidth){
            min.push(i);
            u.push(v);
        }
    }
    return min[u.indexOf(Math.min(...u))];
}

function coordinateToPrice(yCoordinate) {
    return highestTop - ((yCoordinate-10) / y_division)
}

function priceToCoordinate(price) {
    return ((highestTop - price)*y_division);
}

function drawIndicatorMarkLines(ctx, x = 0, y = 0) {
    ctx.clearRect(0, 0, settings.canvas.main.dimensions.w, settings.canvas.main.dimensions.h);

    ctx.setLineDash([5, 3]);
    ctx.strokeStyle = "blue";
    ctx.lineWidth = .5;

    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(settings.canvas.main.dimensions.w, y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, settings.canvas.main.dimensions.h);
    ctx.stroke();
}

function renderCurrentTimeLabel(ctx, x, y, date) {
    ctx.clearRect(0, 0, settings.canvas.time_canvas_main.dimensions.w, settings.canvas.time_canvas_main.dimensions.h);

    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.fillRect(x-65, 0, 130, settings.canvas.time_canvas_main.dimensions.h-10);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(date?date:'', x, settings.canvas.time_canvas_main.dimensions.h/2);
    ctx.fill();

}

function renderCurrentPriceLabel(ctx, x, y, txt) {
    ctx.clearRect(0,0, settings.canvas.priceCanvasTopView.dimensions.w, settings.canvas.priceCanvasTopView.dimensions.h)
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.fillRect(0, y-10, settings.canvas.priceCanvasMain.dimensions.w, 20);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(txt, settings.canvas.priceCanvasMain.dimensions.w/2, y+5);
    ctx.fill();

}

function drawMarkLinesAt(coordinate) {
    let x = getClosestXTimeDivision(coordinate.x), date = ultimateTotalXScale[x];
    let y = coordinateToPrice(coordinate.y);
    coordinate.y-=10;
    x-=customSettings.candleStick.barWidth/2;

    drawIndicatorMarkLines(ctx1, x, coordinate.y);
    renderCurrentPriceLabel(ctx3, x, coordinate.y, `${y.toFixed(2)}`);
    renderCurrentTimeLabel(ctx4, x, y, date);
}*/
