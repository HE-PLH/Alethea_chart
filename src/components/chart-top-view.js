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

const TopMainChartCanvas = props => {
    const canvasRef =  useRef(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        globals.main_canvas_top_view_context = getContext2D(new Creator(canvas).style({dimensions:props.dimensions}));
    });
    return(
        <canvas id="main-chart-top-view-canvas"
                className="x-canvas"
                ref = {canvasRef}
                style={{pointerEvents: "none"}}
        />
    )
};

export default TopMainChartCanvas
