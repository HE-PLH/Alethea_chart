import React from "react";
import {Dropdown} from "./dropdown";

function ActionButton(props) {

    const style = {
        width: "fit-content",
        maxWidth: 150+"px"
    };

    return (
        <div style={{height: "100%", zIndex: 5}}>
            <div onClick={props.click} style={style}  id="droppable-action-button" role = "menu">
                <svg className="ic" width={`${props.icon.width||24}px`} height={`${props.icon.height||24}px`}>
                    <use xlinkHref={`../media/icons/svg_icons.svg#${props.icon.name||"star"}`}></use>
                </svg>
                <span className="text">{props.text||''}</span>
                {props.arrow?
                <svg className="ic" width="24px" height="24px">
                    <use xlinkHref={`../media/icons/svg_icons.svg#${props.arrow}`}></use>
                </svg>:<span/>

                }
            </div>

                {props.children!==undefined?
                props.children:
                    <span/>
                }
        </div>
    )
}

export default ActionButton;