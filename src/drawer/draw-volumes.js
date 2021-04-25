import {settings, customSettings} from "../utilities/settings";
import {globals} from "../utilities/globals";

export function drawVolumes(ctx, dimensions) {
    let color = "", border_color = "";
    let exec = ()=> {
        let obj;
        let decreaseCoordinates =[];
        color = customSettings.candleStick.increaseColor;
        border_color = customSettings.candleStick.borderIncreaseColor;
        for (let i = 0; i < coordinates.length; i++) {
            //draw candle
            obj = coordinates[i];
            if (!obj.increase) {
                decreaseCoordinates.push(obj);
                continue;
            }
            drawCoordinate(ctx, obj, color, border_color);
        }
        color = customSettings.candleStick.decreaseColor;
        border_color = customSettings.candleStick.borderDecreaseColor;
        for (let i = 0; i < decreaseCoordinates.length; i++) {
            //draw candle
            obj = decreaseCoordinates[i];
            drawCoordinate(ctx, obj, color, border_color);
        }
    };
    let coordinates = globals.all_coordinates;
    if (coordinates&&coordinates.length>0){
        // ctx.clearRect(0,0, dimensions.w, dimensions.h);
        exec();
    }
}
function drawCoordinate(ctx, obj, color, border_color) {
    ctx.beginPath();
    ctx.moveTo((obj.wick.x+customSettings.candleStick.barWidth/2), (obj.volume));
    ctx.lineTo((obj.wick.x-customSettings.candleStick.barWidth/2), (obj.volume));
    ctx.lineTo((obj.wick.x-customSettings.candleStick.barWidth/2), (customSettings.volumeGraph.height));
    ctx.lineTo((obj.wick.x+customSettings.candleStick.barWidth/2), (customSettings.volumeGraph.height));
    ctx.lineTo((obj.wick.x+customSettings.candleStick.barWidth/2), (obj.volume));
    if (customSettings.candleStick.bodyDisplay) {
        ctx.fillStyle = color;
        ctx.fill();
    }
    if (customSettings.candleStick.borderDisplay){
        ctx.strokeStyle = border_color;
        ctx.stroke();
    }
}