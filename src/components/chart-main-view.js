import React, {useEffect, useRef, useState} from 'react'
import mouse, {
    is_dragging,
    on_late_click,
    on_start_click,
    on_mouse_out,
    on_released, on_mouse_move, drag_start_flag
} from "../utilities/cv_events";
import {globals} from "../utilities/globals";
import {execute_draw} from "../drawer/drawGraph";
import {adjustDimensions, Creator, getContext2D} from "../utilities/chart-canvas";
import {lazyEffect} from "../utilities/resize_throttle";
import {settings, customSettings} from "../utilities/settings";
import {drawMarkLinesAt} from "../utilities/time_distributor";

const MainChartCanvas = props => {
    const canvasRef =  useRef(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        globals.main_canvas_view_context = getContext2D(new Creator(canvas).style({dimensions:props.dimensions}));
        props.draw();
       
    });

    const handleEarlyClick = (e)=>{
        on_start_click(e);
    };

    const handleLateClick = (e)=>{
        on_late_click(e);
    };

    const handleMouseMove = (e)=>{
        globals.coordinate = {x: e.clientX - e.target.offsetLeft, y: e.clientY - e.target.offsetTop};
        // console.log(globals.price_canvas_top_view_context)
        drawMarkLinesAt(globals.coordinate, props.dimensions, props.x_scale_dimensions, props.y_scale_dimensions, props.candleStick.barWidth)
        // drawMarkLinesAt(globals.coordinate, props.dimensions, props.x_scale_dimensions, props.y_scale_dimensions, props.candleStick.barWidth)
        on_mouse_move(e);
        if (is_dragging()) {
            handleDrag(e);
        }
    };

    const handleMouseUp = (e)=>{
        on_released(e);
    };

    const handleMouseOut = (e)=>{
        on_mouse_out(e)
    };

    const handleDrag = (e)=>{
        mouse.dragging.drag_start?handleDragStart(e): handleDragging(e);
    };

    const handleDragStart = (e)=>{
        globals.operating_right_offset = -customSettings.timeScale.rightOffset;
        globals.operating_top_offset = customSettings.yScale.top_offset;
        globals.operating_scale_coordinate_offset = globals.scale_coordinate_offset%globals.xAxisScaleRange;
        globals.element = e;
    };

    const handleDragging = (e)=>{
        /*let temp = props.timeScale;
        temp.rightOffset=-1*(mouse.dragging.offset.x+globals.operating_right_offset);
        props.setTimeScale(temp);

        temp = props.yScale;
        temp.top_offset=globals.operating_top_offset?(mouse.dragging.offset.y+globals.operating_top_offset):globals.operating_top_offset;
        props.setYScale(temp);*/
        if (e === globals.element) {
            customSettings.timeScale.rightOffset = -1 * (mouse.dragging.offset.x + globals.operating_right_offset);
            customSettings.yScale.top_offset = globals.operating_top_offset ? (mouse.dragging.offset.y + globals.operating_top_offset) : globals.operating_top_offset;
            globals.scale_coordinate_offset = globals.operating_scale_coordinate_offset + mouse.dragging.offset.x % globals.xAxisScaleRange;
            props.draw();
        }
    };

    return(
        <canvas id="main-chart-view-canvas"
                className="x-canvas"
                ref = {canvasRef}
                onClick={handleLateClick}
                onMouseDown={handleEarlyClick}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseOut={handleMouseOut}
        />
    )
};

export default MainChartCanvas
