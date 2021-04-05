import {settings, customSettings} from "../utilities/settings";
import {globals} from "../utilities/globals";

export function drawCandles(ctx, dimensions) {
    let exec = ()=> {
        let obj;
        let decreaseCoordinates =[];
        for (let i = 0; i < coordinates.length; i++) {
            //draw candle
            obj = coordinates[i];
            if (!obj.increase) {
                decreaseCoordinates.push(obj);
                continue;
            }
            drawCoordinate(ctx, obj);
        }

        for (let i = 0; i < decreaseCoordinates.length; i++) {
            //draw candle
            obj = decreaseCoordinates[i];
            drawCoordinate(ctx, obj);
        }
    };
    let coordinates = globals.all_coordinates;
    /*for (let i = 0; i < coordinates.length; i++) {
        console.log(coordinates[i].wick)
    }*/
    if (coordinates&&coordinates.length>0){
        // ctx.clearRect(0,0, dimensions.w, dimensions.h);
        exec();
    }
}
function drawCoordinate(ctx, obj) {
    ctx.beginPath();
    ctx.moveTo((obj.wick.x+customSettings.candleStick.barWidth/2), (obj.wick.y2));
    ctx.lineTo((obj.wick.x-customSettings.candleStick.barWidth/2), (obj.wick.y2));
    ctx.lineTo((obj.wick.x-customSettings.candleStick.barWidth/2), (obj.wick.y3));
    ctx.lineTo((obj.wick.x+customSettings.candleStick.barWidth/2), (obj.wick.y3));
    ctx.fillStyle = obj.candle_settings.color;
    ctx.fill();

    if (obj.candle_settings.wickTopDisplay) {
        ctx.beginPath();
        ctx.moveTo((obj.wick.x), (obj.wick.y1));
        ctx.lineTo((obj.wick.x), (obj.wick.y2));
        ctx.strokeStyle = obj.candle_settings.wickColor;
        ctx.stroke();
    }
    if (obj.candle_settings.wickBottomDisplay) {
        ctx.beginPath();
        ctx.moveTo((obj.wick.x), (obj.wick.y3));
        ctx.lineTo((obj.wick.x), (obj.wick.y4));
        ctx.strokeStyle = obj.candle_settings.wickColor;
        ctx.stroke();
    }
}