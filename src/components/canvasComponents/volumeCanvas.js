import React, {useEffect, useRef, useState} from 'react'
import mouse, {
    is_dragging,
    on_late_click,
    on_start_click,
    on_mouse_out,
    on_released, on_mouse_move, drag_start_flag
} from "../../utilities/cv_events";
import {globals} from "../../utilities/globals";
import {adjustDimensions, Creator, getContext2D} from "../../utilities/chart-canvas";


const VolumeCanvas = props => {
    const canvasRef =  useRef(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        globals.volume_context = getContext2D(new Creator(canvas).style({dimensions:{w: props.dimensions.w, h: props.volumeHeight}}));
        props.drawVolume();
    });
    return(
        <canvas id="volume-canvas"
                className="x-canvas vol-canvas"
                ref = {canvasRef}
                style={{pointerEvents: "none", backgroundColor: "transparent", top: props.volumeTop}}
        />
    )
};

export default VolumeCanvas
