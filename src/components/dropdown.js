import React from "react";
import ActionButton from "./action";


export function Dropdown(props) {
    const style = {
        width: props.width,
        height: props.height
    };
    return (
        <div className={`dropdown-div ${props.show}`} style={style}>
            <div className="d-t-tip"></div>
            <ul style={style} className="dropdown-container">
                {props.children}
            </ul>
        </div>
    )
}

export function DropdownItem(props) {

    return (
        <li className="dropdown-list-item" onClick={props.click}>
            <svg className="ic" width={`${props.icon.width||24}px`} height={`${props.icon.height||24}px`}>
                <use xlinkHref={`../media/icons/svg_icons.svg#${props.icon.name||"star"}`}></use>
            </svg>
            <span className="_text">{props.text||''}</span>
            {props.arrow ?
                <svg className="ic" width="24px" height="24px">
                    <use xlinkHref={`../media/icons/svg_icons.svg#${props.arrow}`}></use>
                </svg> : <span/>
            }
        </li>
    )
}