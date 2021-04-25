import {globals} from "../utilities/globals";
import React, {useEffect, useRef} from "react";
import LeftBodyContainer from "./left-body-container";
import ChartWidget from "./chart_widget";
import RightBodyContainer from "./right-body-container";

export function ChartWidgetMainBody(props) {
    const el = useRef(null);
    useEffect(()=>{
        const my_el = el.current;
        if(globals.dimensions_Master.leftSidebar!==undefined) {
            my_el.style.width = `${globals.dimensions_Master.chartWidget.w}px`;
            my_el.style.height = `${globals.dimensions_Master.chartWidget.h}px`;
        }
    }, [props.fd]);
    return (
        <div id="main-body" className="row-frame" ref={el}>
            <LeftBodyContainer {...props}/>
            <ChartWidget {...props}/>
            <RightBodyContainer {...props}/>
        </div>
    )
}