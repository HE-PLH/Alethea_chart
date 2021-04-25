import React, {useEffect, useRef} from "react";
import {globals} from "../utilities/globals";

export default function LeftBodyContainer(props) {
    const el = useRef(null);
    useEffect(()=>{
        const my_el = el.current;
        if(globals.dimensions_Master.leftSidebar!==undefined) {
            my_el.style.width = `${globals.dimensions_Master.leftSidebar.w}px`;
            my_el.style.height = `${globals.dimensions_Master.leftSidebar.h}px`;
        }
    }, [props.fd]);
    return (
        <div id="left-body-container" ref={el}>

        </div>
    )
}