import {settings, customSettings} from "../utilities/settings";
import {globals} from "../utilities/globals";

export function drawBar(ctx, dimensions) {
    let color = "", wick_color = "";
    let exec = ()=> {
        let obj;
        let decreaseCoordinates =[];
        color = customSettings.candleStick.increaseColor;
        wick_color = customSettings.candleStick.wickIncreaseColor;
        for (let i = 0; i < coordinates.length; i++) {
            //draw candle
            obj = coordinates[i];
            if (!obj.increase) {
                decreaseCoordinates.push(obj);
                continue;
            }
            drawBarCoordinate(ctx, obj, color, wick_color, true);
        }
        color = customSettings.candleStick.decreaseColor;
        wick_color = customSettings.candleStick.wickDecreaseColor;
        for (let i = 0; i < decreaseCoordinates.length; i++) {
            //draw candle
            obj = decreaseCoordinates[i];
            drawBarCoordinate(ctx, obj, color, wick_color, false);
        }

    };
    let coordinates = globals.all_coordinates;
    if (coordinates&&coordinates.length>0){
        // ctx.clearRect(0,0, dimensions.w, dimensions.h);
        exec();
    }
}
function drawBarCoordinate(ctx, obj, color, wick_color, increase) {
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(Math.floor(obj.wick.x), Math.floor(obj.wick.y1));
        ctx.lineTo(Math.floor(obj.wick.x), Math.floor(obj.wick.y4));
        ctx.strokeStyle = wick_color;
        ctx.stroke();
        ctx.lineWidth = 1;
        if (increase){
            ctx.beginPath();
            ctx.moveTo(Math.floor(obj.wick.x+customSettings.candleStick.barWidth/2), Math.floor(obj.wick.y2));
            ctx.lineTo(Math.floor(obj.wick.x), Math.floor(obj.wick.y2));
            ctx.strokeStyle = color;
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(Math.floor(obj.wick.x), Math.floor(obj.wick.y3));
            ctx.lineTo(Math.floor(obj.wick.x-customSettings.candleStick.barWidth/2), Math.floor(obj.wick.y3));
            ctx.strokeStyle = color;
            ctx.stroke();

        }else {
            ctx.beginPath();
            ctx.moveTo(Math.floor(obj.wick.x+customSettings.candleStick.barWidth/2), Math.floor(obj.wick.y3));
            ctx.lineTo(Math.floor(obj.wick.x), Math.floor(obj.wick.y3));
            ctx.strokeStyle = color;
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(Math.floor(obj.wick.x), Math.floor(obj.wick.y2));
            ctx.lineTo(Math.floor(obj.wick.x-customSettings.candleStick.barWidth/2), Math.floor(obj.wick.y2));
            ctx.strokeStyle = color;
            ctx.stroke();
        }
}