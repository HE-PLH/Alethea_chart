import MainChartCanvas from "./canvasComponents/chart-main-view";
import React, {useEffect, useRef, useState} from "react";
import BackMainChartCanvas from "./canvasComponents/chart-back-view";
import TopMainChartCanvas from "./canvasComponents/chart-top-view";
import ChartInfo from "./chart-info";
import VolumeCanvas from "./canvasComponents/volumeCanvas";
import {globals} from "../utilities/globals";

export default function MainChartContainer(props) {
    const el = useRef(null);
    useEffect(() => {
        if (globals.dimensions_Master.canvasDimensions !== undefined) {
            const my_el = el.current;
            my_el.style.width = `${globals.dimensions_Master.canvasDimensions.w}px`;
            my_el.style.height = `${globals.dimensions_Master.canvasDimensions.h}px`;
        }
    }, [props]);

    return (
        <td id="main-chart-super-container" ref={el}>
            <MainChartCanvas {...props}/>
            <VolumeCanvas {...props}/>
            <TopMainChartCanvas {...props} />
            <BackMainChartCanvas {...props}/>
        </td>
    )
}