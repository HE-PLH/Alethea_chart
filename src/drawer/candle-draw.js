import {settings, customSettings} from "../utilities/settings";
import {globals} from "../utilities/globals";

export function drawCandles(ctx, dimensions) {
    let color = "", wick_color = "", border_color = "";
    let exec = ()=> {
        let obj;
        let decreaseCoordinates =[];
        color = customSettings.candleStick.increaseColor;
        wick_color = customSettings.candleStick.wickIncreaseColor;
        border_color = customSettings.candleStick.borderIncreaseColor;
        for (let i = 0; i < coordinates.length; i++) {
            //draw candle
            obj = coordinates[i];
            if (!obj.increase) {
                decreaseCoordinates.push(obj);
                continue;
            }
            drawCoordinate(ctx, obj, color, wick_color, border_color);
        }
        color = customSettings.candleStick.decreaseColor;
        wick_color = customSettings.candleStick.wickDecreaseColor;
        border_color = customSettings.candleStick.borderDecreaseColor;
        for (let i = 0; i < decreaseCoordinates.length; i++) {
            //draw candle
            obj = decreaseCoordinates[i];
            drawCoordinate(ctx, obj, color, wick_color, border_color);
        }
    };
    let coordinates = globals.all_coordinates;
    if (coordinates&&coordinates.length>0){
        exec();
    }
}
function drawCoordinate(ctx, obj, color, wick_color, border_color) {
    ctx.beginPath();
    ctx.moveTo((obj.wick.x+customSettings.candleStick.barWidth/2), (obj.wick.y2));
    ctx.lineTo((obj.wick.x-customSettings.candleStick.barWidth/2), (obj.wick.y2));
    ctx.lineTo((obj.wick.x-customSettings.candleStick.barWidth/2), (obj.wick.y3));
    ctx.lineTo((obj.wick.x+customSettings.candleStick.barWidth/2), (obj.wick.y3));
    ctx.lineTo((obj.wick.x+customSettings.candleStick.barWidth/2), (obj.wick.y2));
    if (customSettings.candleStick.bodyDisplay) {
        ctx.fillStyle = color;
        ctx.fill();
    }
    if (customSettings.candleStick.borderDisplay){
        ctx.strokeStyle = border_color;
        ctx.lineWidth = customSettings.candleStick.borderWidth;
        ctx.stroke();
    }
    if(customSettings.candleStick.wickDisplay) {
        if (obj.candle_settings.wickTopDisplay) {
            ctx.beginPath();
            ctx.moveTo((obj.wick.x), (obj.wick.y1));
            ctx.lineTo((obj.wick.x), (obj.wick.y2));
            ctx.strokeStyle = wick_color;
            ctx.lineWidth = customSettings.candleStick.borderWidth;
            ctx.stroke();
        }
        if (obj.candle_settings.wickBottomDisplay) {
            ctx.beginPath();
            ctx.moveTo((obj.wick.x), (obj.wick.y3));
            ctx.lineTo((obj.wick.x), (obj.wick.y4));
            ctx.strokeStyle = wick_color;
            ctx.lineWidth = customSettings.candleStick.borderWidth;
            ctx.stroke();
        }
    }
}