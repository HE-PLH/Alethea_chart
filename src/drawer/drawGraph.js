import {globals} from "../utilities/globals";
import {customSettings} from "../utilities/settings";
import {drawLine} from "./drawLineGraph";
import {drawCandles} from "./candle-draw";
import {drawBar} from "./drawBarChart";

export function execute_draw(type, mainCanvasDimensions) {
    switch (type) {
        case 'candleStick':
            globals.current_graph = 'candleStick';
            drawCandles(globals.main_canvas_view_context, mainCanvasDimensions);
            /*let ctx = globals.main_canvas_view_context;
            ctx.beginPath();
            ctx.arc(100, 100, 50, 0, 2*Math.PI, false);
            ctx.fillStyle = "blue";
            ctx.fill();*/
            break;
        case 'barGraph':
            globals.current_graph = 'barGraph';
            drawBar(globals.main_canvas_view_context, mainCanvasDimensions);
            break;
        case 'lineGraph':
            globals.current_graph = 'lineGraph';
            drawLine(globals.main_canvas_view_context, mainCanvasDimensions, false);
            break;
        case 'areaGraph':
            globals.current_graph = 'areaGraph';
            drawLine(globals.main_canvas_view_context, mainCanvasDimensions, true);
            break;
    }
}