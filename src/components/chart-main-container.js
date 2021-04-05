import MainChartCanvas from "./canvasComponents/chart-main-view";
import React, {useEffect, useState} from "react";
import BackMainChartCanvas from "./canvasComponents/chart-back-view";
import TopMainChartCanvas from "./canvasComponents/chart-top-view";
import ChartInfo from "./chart-info";
import VolumeCanvas from "./canvasComponents/volumeCanvas";

export default function MainChartContainer(props) {
    const style = {
        width: props.dimensions.w,
    };
    return (
        <td style={style} id="main-chart-super-container">
            <div id="main-chart-container">
                <MainChartCanvas {...props}/>
                <VolumeCanvas {...props}/>
                <TopMainChartCanvas {...props} />
                <BackMainChartCanvas {...props}/>
                
            </div>

        </td>
    )
}