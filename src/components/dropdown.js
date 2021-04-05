import React from "react";
import ActionButton from "./action";


export function Dropdown(props) {
    const style = {
        width: props.width,
        minHeight: props.height
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
    const style = {
        minHeight: props.dimensions.h,
        fontWeight: "bold",
    };
    return (
        <li style={style}>
            {props.type === "normal"?<NormalDropdownItem {...props}/>:props.type==="symbol-choose"?<SymbolChoosingItem {...props}/>:null}
        </li>
    )
}

function NormalDropdownItem(props) {
    const style = {
        minHeight: props.dimensions.h
    };
    return (
        <div className="dropdown-list-item" style={style} onClick={props.click}>
            {props.icon?
            <svg className="ic" width={`${props.icon.width||24}px`} height={`${props.icon.height||24}px`}>
                <use xlinkHref={`../media/icons/svg_icons.svg#${props.icon.name||"star"}`}></use>
            </svg>:null
            }
            <span className="_text">{props.text||''}</span>
            {props.arrow ?
                <svg className="ic" width="24px" height="24px">
                    <use xlinkHref={`../media/icons/svg_icons.svg#${props.arrow}`}></use>
                </svg> : <span/>
            }
        </div>
    )
}
function SymbolChoosingItem(props) {
    const style = {
        minHeight: props.dimensions.h
    };
    return (
        <div className="dropdown-list-item s-item" style={style} onClick={props.click}>
            <div className="symbol-body flexible-column">
                <span className="smb">{props.text[0]}</span>
                <span className="smb_name">{props.text[1]}</span>
            </div>

            <div className="symbol-company-body flexible-column">
                <span className="smb-type">{props.text[2]}</span>
                <span>{props.text[3]}</span>
            </div>

            {props.icon?
            <svg className="ic" width={`${props.icon.width||24}px`} height={`${props.icon.height||24}px`}>
                <use xlinkHref={`../media/icons/svg_icons.svg#${props.icon.name||"star"}`}></use>
            </svg>:null
            }
            {props.arrow ?
                <svg className="ic" width="24px" height="24px">
                    <use xlinkHref={`../media/icons/svg_icons.svg#${props.arrow}`}></use>
                </svg> : <span/>
            }
        </div>
    )
}