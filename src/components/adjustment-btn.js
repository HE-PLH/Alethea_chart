import React from "react";
import {x_axis} from "../utilities/time_distributor";
import {globals} from "../utilities/globals";
import {customSettings} from "../utilities/settings";

export function AdjustmentBtn(props) {

    const click = (e)=>{
        let str = props.id.split("-");
        let f = str[1][0].toUpperCase();
        let rest = str[1].slice(1, str[1].length);
        x_axis[`${str[0]+f+rest}`]();
        globals.c_change = true;
        props.draw();
    };

    return (
        <button id={props.id} onClick={click} className="click-btns">
            {props.text}
        </button>
    )
}