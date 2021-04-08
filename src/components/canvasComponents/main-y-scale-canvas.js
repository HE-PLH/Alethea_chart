import React, {useEffect, useRef, useState} from 'react'
import mouse, {
    is_dragging,
    on_late_click,
    on_start_click,
    on_mouse_out,
    on_released, on_mouse_move, drag_start_flag, Touch, is_swiping
} from "../../utilities/cv_events";
import {globals} from "../../utilities/globals";
import {execute_draw} from "../../drawer/drawGraph";
import {adjustDimensions, Creator, getContext2D} from "../../utilities/chart-canvas";
import {lazyEffect} from "../../utilities/resize_throttle";
import {settings, customSettings} from "../../utilities/settings";
import {drawMarkLinesAt} from "../../utilities/time_distributor";

const MainYScaleCanvas = props => {
    const canvasRef =  useRef(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        globals.price_canvas_main_view_context = getContext2D(new Creator(canvas).style({dimensions:props.dimensions}));
        props.drawYScale();
    }, [props]);

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

    function handleTouchDragStart(e) {
        globals.element = e;
         globals.operating_top_limit = customSettings.yScale.yTopLimit;
         globals.operating_bottom_limit = customSettings.yScale.yBottomLimit;
         globals.operating_top_offset = customSettings.yScale.top_offset;
    }

    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        Touch.clicking.status = true;
        Touch.clicking.point = {
            x: touch.clientX,
            y: touch.clientY,
        };
        handleTouchDragStart(e);
    };

    const handleTouchDragging = (e) => {
        if (e === globals.element) {
            customSettings.yScale.yTopLimit = (globals.operating_top_limit - Touch.dragging.offset.y);
            customSettings.yScale.top_offset = (globals.operating_top_offset - Touch.dragging.offset.y);
            customSettings.yScale.yBottomLimit = (globals.operating_bottom_limit + Touch.dragging.offset.y);
            if (customSettings.yScale.yBottomLimit - customSettings.yScale.yTopLimit > 0) {
                props.draw();
            }
        }
    };

    const handleTouchMove = (e) => {
        if (is_swiping(e)){
            handleTouchDragging(e)
        }
    };
    const handleTouchEnd = (e) => {
        const touch = e.changedTouches[0];
        Touch.dragging.status = false;
        Touch.clicking.status = false;
        /*Touch.dragging.offset = {
            x: Math.abs(touch.clientX-Touch.clicking.point.x),
            y: Math.abs(touch.clientY-Touch.clicking.point.y)
        };
        console.log(Touch.dragging.point)*/
    };


    return(
        <canvas className = "y-canvas"
                ref = {canvasRef}
                onClick={handleLateClick}
                onMouseDown={handleEarlyClick}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseOut={handleMouseOut}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
        />
    )
};

export default MainYScaleCanvas;
