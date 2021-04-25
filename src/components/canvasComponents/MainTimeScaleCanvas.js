import React, {useEffect, useRef} from 'react'
import mouse, {
    is_dragging, is_swiping,
    on_late_click,
    on_mouse_move,
    on_mouse_out,
    on_released,
    on_start_click, Touch
} from "../../utilities/cv_events";
import {globals} from "../../utilities/globals";
import {Creator, getContext2D} from "../../utilities/chart-canvas";
import {customSettings} from "../../utilities/settings";
import {drawMarkLinesAt} from "../../utilities/time_distributor";

const MainTimeScaleCanvas = props => {
    const canvasRef =  useRef(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        globals.time_canvas_main_view_context = getContext2D(new Creator(canvas).style({dimensions:props.dimensions}));
        props.drawXScale();
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
        globals.c_change = false;
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
        globals.operating_bar_width = customSettings.candleStick.barWidth;
    };

    const handleDragging = (e)=>{
        globals.c_change = true;
        let a = globals.operating_bar_width - mouse.dragging.offset.x/10;
        a = a.toFixed(1);
        if (a>0){
            customSettings.candleStick.barWidth = parseInt(a);
            props.draw();
        }
    };


    function handleTouchDragStart(e) {
        globals.element = e;
        globals.operating_top_limit = customSettings.yScale.yTopLimit;
        globals.operating_bottom_limit = customSettings.yScale.yBottomLimit;
        globals.operating_top_offset = customSettings.yScale.top_offset;
        globals.operating_bar_width = customSettings.candleStick.barWidth;
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

    function handleTouchDragging(e) {
        if (e === globals.element) {
            globals.c_change = true;
            let a = globals.operating_bar_width - Touch.dragging.offset.x/10;
            a = a.toFixed(1);
            if (a>0){
                customSettings.candleStick.barWidth = parseInt(a);
                props.draw();
            }
        }
    }

    const handleTouchMove = (e) => {
        if (is_swiping(e)){
            handleTouchDragging(e)
        }
    };
    const handleTouchEnd = (e) => {
        globals.c_change = false;
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
        <canvas id="main-time-scale-canvas"
                className="time_canvas"
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

export default MainTimeScaleCanvas
