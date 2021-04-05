import React, {useEffect, useRef} from "react";
import {Methods} from "../utilities/methods";

export function ItemTitleOHCL(props) {
    const el = useRef(null);
    useEffect(()=>{
        const cont = el.current;
        Methods.setShow(cont, props.show);
    }, [props.show]);
    return (
        <div ref={el} className="top-title-ohcl">
            <span className="d-letter d-o">O</span>
            <span className="d-number d-no">{props.record&&props.record.open?props.record.open.toFixed(2):""}</span>
            <span className="d-letter d-h">H</span>
            <span className="d-number d-nh">{props.record&&props.record.high?props.record.high.toFixed(2):""}</span>
            <span className="d-letter d-c">C</span>
            <span className="d-number d-nc">{props.record&&props.record.close?props.record.close.toFixed(2):""}</span>
            <span className="d-letter d-l">L</span>
            <span className="d-number d-nl">{props.record&&props.record.low?props.record.low.toFixed(2):""}</span>
        </div>
    )
}