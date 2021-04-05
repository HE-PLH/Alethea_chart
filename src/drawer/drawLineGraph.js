import {settings, customSettings} from "../utilities/settings";
import {globals} from "../utilities/globals";

export function drawLine(ctx, dimensions, area = true) {
    let coordinates = globals.all_coordinates;
    if (coordinates&&coordinates.length>0){
        // ctx.clearRect(0, 0, dimensions.w, dimensions.h);
        drawLineCoordinate(ctx, coordinates, area, dimensions);
    }
}
function drawLineCoordinate(ctx, obj, area, dimensions) {
    ctx.lineWidth = settings.default.barGraph.lineWidth;
    ctx.beginPath();
    let val = 2;
    val = obj[0].increase?2:3;
    if (area){
        ctx.moveTo((obj[0].wick.x), dimensions.h);
        ctx.lineTo((obj[0].wick.x), (obj[0].wick[`y${val}`]));
    }else{
        ctx.moveTo((obj[0].wick.x), (obj[0].wick[`y${val}`]));
    }
    for (let i = 1;i<obj.length;i++) {
        val = obj[i].increase?2:3;
        ctx.lineTo((obj[i].wick.x), (obj[i].wick[`y${val}`]));
    }
    ctx.strokeStyle = customSettings.candleStick.increaseColor;
    ctx.stroke();
    if (area) {
        ctx.lineTo((obj[obj.length - 1].wick.x), dimensions.h);
        addGradient(ctx, dimensions);
    }
}
function addGradient(ctx, dimensions){
    let gradient = ctx.createLinearGradient(0, 0, 0, dimensions.h);
    gradient.addColorStop(0, "green");
    gradient.addColorStop(0.5, "green");
    gradient.addColorStop(1, "white");
    ctx.fillStyle = gradient;
    ctx.fill();
}