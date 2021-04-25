import React from 'react'
import mouse, {
    is_dragging, is_swiping,
    on_late_click,
    on_mouse_move,
    on_mouse_out,
    on_released,
    on_start_click, Touch
} from "../utilities/cv_events";
import {clearMarks} from "../utilities/clear-ctx";
import {globals} from "../utilities/globals";
import {drawMarkLinesAt} from "../utilities/time_distributor";
import {customSettings} from "../utilities/settings";

export default function ChartSettingsTitle(props){

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
        e.preventDefault();
        mouse.dragging.drag_start?handleDragStart(e): handleDragging(e);
    };

    const handleDragStart = (e)=>{
        globals.operating_settings_left = props.dimensions.left;
        globals.operating_settings_top = props.dimensions.top;
        globals.element = e;
    };
    const handleDragging = (e)=>{
        if (e === globals.element) {
            let ml = parseFloat(globals.operating_settings_left) + (mouse.dragging.offset.x)*100/window.innerWidth;
            let mt = parseFloat(globals.operating_settings_top) + (mouse.dragging.offset.y)*100/window.innerHeight;
            props.adjustDimensions({top: `${mt}%`, left: `${ml}%`});
        }
    };

    const handleTouchDragStart = e => {
        globals.operating_settings_left = props.dimensions.left;
        globals.operating_settings_top = props.dimensions.top;
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
            let ml = parseFloat(globals.operating_settings_left) + (Touch.dragging.offset.x)*100/window.innerWidth;
            let mt = parseFloat(globals.operating_settings_top) + (Touch.dragging.offset.y)*100/window.innerHeight;
            props.adjustDimensions({top: `${mt}%`, left: `${ml}%`});
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

    return (
        <div className="cs-title"
             onClick={handleLateClick}
             onMouseDown={handleEarlyClick}
             onMouseMove={handleMouseMove}
             onMouseUp={handleMouseUp}
             onMouseOut={handleMouseOut}
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd}
        >
            chart-settings
        </div>
    )
}