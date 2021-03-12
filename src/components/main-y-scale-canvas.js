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

const MainYScaleCanvas = props => {
    const canvasRef =  useRef(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        globals.price_canvas_main_view_context = getContext2D(new Creator(canvas).style({dimensions:props.dimensions}));
        props.drawYScale();
    });

    const handleEarlyClick = (e)=>{
        on_start_click(e);
    };

    const handleLateClick = (e)=>{
        on_late_click(e);
    };

    const handleMouseMove = (e)=>{
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
        globals.element = e;
         globals.operating_top_limit = customSettings.yScale.yTopLimit;
         globals.operating_bottom_limit = customSettings.yScale.yBottomLimit;
         globals.operating_top_offset = customSettings.yScale.top_offset;
        // globals.operating_scale_coordinate_offset = scale_coordinate_offset%xAxisScaleRange;
        //globals.operating_scale_coordinate_offset = scale_coordinate_offset%xAxisScaleRange;
    };

    const handleDragging = (e)=>{
        if (e === globals.element) {
            customSettings.yScale.yTopLimit = (globals.operating_top_limit - mouse.dragging.offset.y);
            customSettings.yScale.top_offset = (globals.operating_top_offset - mouse.dragging.offset.y);
            customSettings.yScale.yBottomLimit = (globals.operating_bottom_limit + mouse.dragging.offset.y);
            if (customSettings.yScale.yBottomLimit - customSettings.yScale.yTopLimit > 0) {
                props.draw();
            }
        }
    };

    return(
        <canvas className = "y-canvas"
                ref = {canvasRef}
                onClick={handleLateClick}
                onMouseDown={handleEarlyClick}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseOut={handleMouseOut}
        />
    )
};

export default MainYScaleCanvas;
