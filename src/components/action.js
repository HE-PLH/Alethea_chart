import React from "react";
import {Dropdown} from "./dropdown";

function ActionButton(props) {
    const style = {
        width: "fit-content",
        maxWidth: 150+"px"
    };


    return (
        <div style={{height: "100%", zIndex: 5}}>
            <div onClick={props.click} style={style}  className="droppable-action-button" role = "menu">
                {props.icon?
                <svg className="ic" width={`${props.icon.width||24}px`} height={`${props.icon.height||24}px`}>
                    <use xlinkHref={`../media/icons/svg_icons.svg#${props.icon.name||"star"}`}></use>
                </svg>:null
                }
                <span className="text">{props.text||''}</span>
                {props.arrow?
                <svg className="ic" width="24px" height="24px">
                    <use xlinkHref={`../media/icons/svg_icons.svg#${props.arrow}`}></use>
                </svg>:null

                }
            </div>

                {props.children!==undefined?
                props.children:
                    null
                }
        </div>
    )
}

export default ActionButton;