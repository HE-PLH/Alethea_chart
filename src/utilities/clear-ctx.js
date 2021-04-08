import {globals} from "./globals";
import {customSettings} from "./settings"

export function clearCoordinates(coordinates, dimensions) {
    const f = (ctx, func)=>{
        for (let i = 0; i < coordinates.length; i++) {
            let pt = coordinates[i];
            func(pt)
        }
    };

    if(globals.volume_context!==CanvasRenderingContext2D){
        f(globals.volume_context, (pt)=>{
            globals.volume_context.clearRect(Math.floor(pt.wick.x)-customSettings.candleStick.barWidth/2, Math.floor(pt.volume), customSettings.candleStick.barWidth+customSettings.barGraph.lineWidth, Math.ceil(customSettings.volumeGraph.height)-Math.floor(pt.volume));
        });
    }

    switch (globals.current_graph) {
        case "candleStick":
         f(globals.main_canvas_view_context, (pt)=>{
             globals.main_canvas_view_context.clearRect(Math.floor(pt.wick.x)-customSettings.candleStick.barWidth/2, Math.floor(pt.wick.y1), customSettings.candleStick.barWidth+customSettings.barGraph.lineWidth, Math.ceil(pt.wick.y4)-Math.floor(pt.wick.y1));
         });
         break;
        case "barGraph":
         f(globals.main_canvas_view_context, (pt)=>{
             globals.main_canvas_view_context.clearRect(
                 Math.floor(pt.wick.x)-customSettings.candleStick.barWidth/2-customSettings.barGraph.lineWidth/2,
                 Math.floor(pt.wick.y1-2),
                 customSettings.candleStick.barWidth+customSettings.barGraph.lineWidth+customSettings.barGraph.lineWidth/2,
                 4+Math.ceil(pt.wick.y4)-Math.floor(pt.wick.y1))
         });
         break;
        case "lineGraph":

            // let coordinate = globals.all_coordinates[0];
            // let pt1, pt2, d, x = 0, y = 0, width = 0, height = 0;
            // for (let i = 1; i < globals.all_coordinates.length; i++) {         
            //     if (coordinate.increase) {
            //         pt1 = coordinate.wick.y2+customSettings.barGraph.lineWidth;
            //     }else{
            //         pt1 = globals.all_coordinates[i].wick.y3-customSettings.barGraph.lineWidth;
            //     }
                
            //     if (globals.all_coordinates[i].increase) {
            //         pt2 = globals.all_coordinates[i].wick.y2+customSettings.barGraph.lineWidth;
            //     }else{
            //         pt2 = coordinate.wick.y3-customSettings.barGraph.lineWidth;
            //     }


            //     y = (pt1>pt2)?pt1: pt2;
            //     globals.main_canvas_view_context.clearRect(
            //         globals.all_coordinates[i].wick.x-customSettings.barGraph.lineWidth, y,globals.approximateCandleWidth+customSettings.barGraph.lineWidth*2, Math.abs(pt2-pt1)
            //         );

            //     coordinate = globals.all_coordinates[i];
            //     // console.log(coordinate);
                
            // }
            globals.main_canvas_view_context.clearRect(
                0, 0,
                dimensions.w,
                dimensions.h
                );

         break;
        case "areaGraph":
         f(globals.main_canvas_view_context, (pt)=>{
             globals.main_canvas_view_context.clearRect(0, 0, dimensions.w, dimensions.h)
         });
         break;
         default:
             console.log("hi");
    }
}

export function clearMarks(x_dimensions, y_dimensions){
    globals.main_canvas_back_view_context.clearRect(globals.coordinate.x-customSettings.candleStick.barWidth, 0, customSettings.candleStick.barWidth*2, y_dimensions.h);
    globals.main_canvas_back_view_context.clearRect(0, globals.coordinate.y-customSettings.candleStick.barWidth, x_dimensions.w, customSettings.candleStick.barWidth*2);   

    globals.time_canvas_top_view_context.clearRect(globals.coordinate.x-65-customSettings.candleStick.barWidth, 0, 130+customSettings.candleStick.barWidth*2, x_dimensions.h-8);
    globals.price_canvas_top_view_context.clearRect(0, globals.coordinate.y-12, y_dimensions.w, 24);   
}