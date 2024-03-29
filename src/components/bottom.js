import ChartContainer from "./chart-container";
import React, {useEffect, useRef} from "react";
import {globals} from "../utilities/globals";


export default function BottomComponent(props) {
    const el = useRef(null);
    useEffect(()=>{
        const my_el = el.current;
        if(globals.dimensions_Master.leftSidebar!==undefined) {
            my_el.style.width = globals.dimensions_Master.bottomTab.w;
            my_el.style.height = globals.dimensions_Master.bottomTab.h;
        }
    }, [props.fd]);
    return (
        <div className="bottom" ref={el}>

        </div>
    )
}