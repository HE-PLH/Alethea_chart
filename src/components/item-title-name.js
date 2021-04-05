import React, {useEffect, useRef} from "react";
import {Methods} from "../utilities/methods";

export function ItemTitle(props) {
    const el = useRef(null);
    useEffect(()=>{
        const cont = el.current;
        Methods.setShow(cont, props.show);
    });
    return (
        <div ref={el} className={`top-title-names`}>
            <span>Apple incorporation</span>
        </div>
    )
}