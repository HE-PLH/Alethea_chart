import React, {useEffect, useRef, useState, useContext} from 'react'
import mouse, {
    is_dragging,
    on_late_click,
    on_start_click,
    on_mouse_out,
    on_released, on_mouse_move, drag_start_flag, is_swiping, Touch
} from "../../utilities/cv_events";
import {globals} from "../../utilities/globals";
import {execute_draw} from "../../drawer/drawGraph";
import {adjustDimensions, Creator, getContext2D} from "../../utilities/chart-canvas";
import {lazyEffect} from "../../utilities/resize_throttle";
import {settings, customSettings} from "../../utilities/settings";
import {drawMarkLinesAt} from "../../utilities/time_distributor";
import ChartInfo from "../chart-info";
import {ChartInfoContext} from "../../contexts/contexts"
import { clearMarks } from '../../utilities/clear-ctx';


function MainChartCanvas(props) {
    const canvasRef =  useRef(null);
    const { record, setRecord } = useContext(ChartInfoContext);

    useEffect(()=>{
        const canvas = canvasRef.current;
        globals.main_canvas_view_context = getContext2D(new Creator(canvas).style({dimensions:props.dimensions}));
        props.draw();
    }, [props]);
    const handleEarlyClick = (e)=>{
        on_start_click(e);
    };

    const handleLateClick = (e)=>{
        on_late_click(e);
    };

    const handleMouseMove = (e)=>{
        clearMarks(props.x_scale_dimensions, props.y_scale_dimensions);
        globals.coordinate = {x: e.clientX - globals.canvasOffset.left, y: e.clientY - globals.canvasOffset.top};
        let r = drawMarkLinesAt(globals.coordinate, props.dimensions, props.x_scale_dimensions, props.y_scale_dimensions, props.candleStick.barWidth);        
        setRecord(r);
        on_mouse_move(e);
        if (is_dragging()) {
            handleDrag(e);
        }
        else{
            let el = document.getElementById("user-x-adjustment");
            if (globals.coordinate.y>props.dimensions.h-100){
                if (el.classList.contains("hide")){
                    el.classList.remove("hide");
                    el.classList.add("show")
                }
            }else {
                if (el.classList.contains("show")){
                    el.classList.remove("show");
                    el.classList.add("hide")
                }
            }
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
        // globals.operating_right_offset = -props.timeScale.rightOffset;
        // globals.operating_top_offset = props.yScale.top_offset;
        // globals.operating_scale_coordinate_offset = globals.scale_coordinate_offset%globals.xAxisScaleRange;

        globals.operating_right_offset = -customSettings.timeScale.rightOffset;
        globals.operating_top_offset = customSettings.yScale.top_offset;
        globals.operating_scale_coordinate_offset = globals.scale_coordinate_offset%globals.xAxisScaleRange;
        globals.element = e;
    };

    const handleDragging = (e)=>{
        // let temp = props.timeScale;
        // temp.rightOffset=-1*(mouse.dragging.offset.x+globals.operating_right_offset);
        // props.setTimeScale(temp);

        // temp = props.yScale;
        // temp.top_offset=globals.operating_top_offset?(mouse.dragging.offset.y+globals.operating_top_offset):globals.operating_top_offset;
        // props.setYScale(temp);

        // globals.scale_coordinate_offset = globals.operating_scale_coordinate_offset + mouse.dragging.offset.x % globals.xAxisScaleRange;

        if (e === globals.element) {
            customSettings.timeScale.rightOffset = -1 * (mouse.dragging.offset.x + globals.operating_right_offset);
            customSettings.yScale.top_offset = globals.operating_top_offset ? (mouse.dragging.offset.y + globals.operating_top_offset) : globals.operating_top_offset;
            globals.scale_coordinate_offset = globals.operating_scale_coordinate_offset + mouse.dragging.offset.x % globals.xAxisScaleRange;
            props.draw();
        }
    };

    const handleTouchDragStart = e => {
        globals.operating_right_offset = -customSettings.timeScale.rightOffset;
        globals.operating_top_offset = customSettings.yScale.top_offset;
        globals.operating_scale_coordinate_offset = globals.scale_coordinate_offset%globals.xAxisScaleRange;
        globals.element = e;
    };

    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        Touch.clicking.status = true;
        Touch.clicking.point = {
            x: touch.clientX,
            y: touch.clientY,
        };
        handleTouchDragStart(e);
    };

    const handleTouchDragging = e => {
        if (e === globals.element) {
            globals.coordinate = {x: Touch.dragging.point.x - globals.canvasOffset.left, y: Touch.dragging.point.y - globals.canvasOffset.top};
            drawMarkLinesAt(globals.coordinate, props.dimensions, props.x_scale_dimensions, props.y_scale_dimensions, props.candleStick.barWidth);
            let el = document.getElementById("user-x-adjustment");
            if (globals.coordinate.y>props.dimensions.h-100){
                if (el.classList.contains("hide")){
                    el.classList.remove("hide");
                    el.classList.add("show")
                }
            }else {
                if (el.classList.contains("show")) {
                    el.classList.remove("show");
                    el.classList.add("hide")
                }
            }


            customSettings.timeScale.rightOffset = -1 * (Touch.dragging.offset.x + globals.operating_right_offset);
            customSettings.yScale.top_offset = globals.operating_top_offset ? (Touch.dragging.offset.y + globals.operating_top_offset) : globals.operating_top_offset;
            globals.scale_coordinate_offset = globals.operating_scale_coordinate_offset + Touch.dragging.offset.x % globals.xAxisScaleRange;
            props.draw();
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
        <>
            <ChartInfo {...props}/>
            
            <canvas id="main-chart-view-canvas"
                className="x-canvas"
                ref = {canvasRef}
                style = {{width: props.dimensions.w, height: props.dimensions.h}}
                onClick={handleLateClick}
                onMouseDown={handleEarlyClick}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseOut={handleMouseOut}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            />
            
        </>
    )
};

export default MainChartCanvas
