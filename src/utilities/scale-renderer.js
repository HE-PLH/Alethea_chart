/*
function drawScaleLines(ctx){
    ctx.clearRect(0, 0, settings.canvas.main_canvas_back_view.dimensions.w, settings.canvas.main_canvas_back_view.dimensions.h);
    ctx2.clearRect(0, 0, settings.canvas.priceCanvasTopView.dimensions.w, settings.canvas.priceCanvasTopView.dimensions.h);
    ctx6.clearRect(0, 0, settings.canvas.time_canvas_main.dimensions.w, settings.canvas.time_canvas_main.dimensions.h);
    drawHorizontalScaleLines(ctx);
    drawVerticalScaleLines(ctx);
}
*/

import {getClosestXTimeDivision, priceToCoordinate} from "./time_distributor";
import {globals} from "./globals";

function drawVerticalScaleLines(ctx, dimension){
    ctx.beginPath();
    ctx.moveTo(0, dimension.y);
    ctx.lineTo(dimension.x, dimension.y);
        // ctx.setLineDash([5, 3]);
    ctx.strokeStyle = "#e8e8e8";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();
}

function drawVerticalScaleLabel(ctx, txt, dimension, barGraph) {
    ctx.beginPath();
    ctx.moveTo(0, dimension.y);
    ctx.lineTo(3, dimension.y);
    ctx.strokeStyle = "black";
    ctx.lineWidth = barGraph.ticks;
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = "black";
    ctx.font = "15px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(txt, dimension.x/2, dimension.y+5);
    ctx.fill();
}

export function drawVerticalScale(scale_labels_ctx, scale_lines_ctx, list, lines_dimension = {w: 0, h: 0}, labels_dimension = {w: 0, h: 0}, barGraph){
    if (scale_lines_ctx.canvas !== undefined) {
        scale_lines_ctx.clearRect(0,0, lines_dimension.w, lines_dimension.h);
        scale_labels_ctx.clearRect(0,0, labels_dimension.w, labels_dimension.h);
        let current = list[0], itemY = 0, txt = '';
        for (let i = 1;i<list.length;i++) {
            itemY = priceToCoordinate(current);
            drawVerticalScaleLines(scale_lines_ctx, {x: lines_dimension.w, y: itemY});
            txt = `${current}`;
            drawVerticalScaleLabel(scale_labels_ctx, txt, {x: labels_dimension.w, y:itemY}, barGraph);
            current = list[i];
        }
    }
}


function drawHorizontalScaleLabel(ctx, txt, dimension, barGraph) {
    ctx.beginPath();
    ctx.moveTo(dimension.x, 0);
    ctx.lineTo(dimension.x, 3);
    ctx.strokeStyle = "black";
    ctx.lineWidth = barGraph.ticks;
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(txt, dimension.x-10, dimension.y/2);
    ctx.fill();
}

export function drawHorizontalScale(scale_labels_ctx, scale_lines_ctx, list, lines_dimension = {w: 0, h: 0}, labels_dimension = {w: 0, h: 0}, barGraph, barWidth){
    if (scale_lines_ctx.canvas !== undefined) {
        scale_labels_ctx.clearRect(0,0, labels_dimension.w, labels_dimension.h);
        let itemX = 0, n = 0, current = list[0], txt = '';
        for (let i = 1;i<list.length;i++) {
            n = (current*globals.approximateCandleWidth) + globals.scale_coordinate_offset;
            itemX = getClosestXTimeDivision(n);
            if (itemX) {
                txt = `${globals.ultimateTotalXScale[itemX].time.split(",")[0]}`;
                itemX -= barWidth / 2;
                drawHorizontalScaleLine(scale_lines_ctx, {x: itemX, y: lines_dimension.h});
                drawHorizontalScaleLabel(scale_labels_ctx, txt, {x: itemX, y: labels_dimension.h}, barGraph);
            }
            current = list[i];
        }
    }
}


function drawHorizontalScaleLine(ctx, dimension){
    ctx.beginPath();
    ctx.moveTo(dimension.x, 0);
    ctx.lineTo(dimension.x, dimension.y);
        // ctx.setLineDash([5, 3]);
    ctx.strokeStyle = "#e8e8e8";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();
    /*let itemX = 0, n = 0, current = globals.xAxisList[0], txt = '';
    for (let i = 1;i<globals.xAxisList.length;i++) {
        n = (current*globals.approximateCandleWidth)+scale_coordinate_offset;
        itemX = getClosestXTimeDivision(n);
        if (itemX) {
            txt = `${globals.ultimateTotalXScale[itemX].split(",")[0]}`;
            itemX -= customSettings.candleStick.barWidth / 2;
            ctx.beginPath();
            ctx.moveTo(itemX, 0);
            ctx.lineTo(itemX, dimension.h);
            // ctx.setLineDash([5, 3]);
            ctx.strokeStyle = "black";
            ctx.stroke();
            ctx.lineWidth = 1;
            renderTimeAt(itemX, txt, ctx6);
        }
        current = globals.xAxisList[i];
    }*/
}

/*
function drawHorizontalScale(scale_labels_ctx, scale_lines_ctx, list, lines_dimension = {w: 0, h: 0}, labels_dimension = {w: 0, h: 0}){
    scale_lines_ctx.clearRect(0, 0, lines_dimension.w, lines_dimension.h);
    scale_labels_ctx.clearRect(0, 0, labels_dimension.w, labels_dimension.h);
    drawHorizontalScaleLines(scale_lines_ctx);
}

function drawHorizontalScaleLines(ctx, list){
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
            ctx.lineWidth = 1;
            renderTimeAt(itemX, txt, ctx6);
        }
        current = globals.xAxisList[i];
    }
}
function drawVerticalScaleLines(ctx, dimension){
    ctx.beginPath();
    ctx.moveTo(0, dimension.y);
    ctx.lineTo(dimension.x, dimension.y);
        // ctx.setLineDash([5, 3]);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.lineWidth = 1;
    /!*let current = list[0], itemY = 0, txt = '';
    for (let i = 1;i<list.length;i++) {
        itemY = priceToCoordinate(current);
        ctx.beginPath();
        ctx.moveTo(0, itemY);
        ctx.lineTo(settings.canvas.main_canvas_back_view.dimensions.w, itemY);
        // ctx.setLineDash([5, 3]);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.lineWidth = 1;

        txt = `${current}`;
        renderPriceAt(itemY, txt, ctx2);

        current = globals.yAxisList[i];
    }*!/
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
}

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
}*/
