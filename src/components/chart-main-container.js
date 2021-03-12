import MainChartCanvas from "./chart-main-view";
import React, {useEffect, useState} from "react";
import BackMainChartCanvas from "./chart-back-view";
import TopMainChartCanvas from "./chart-top-view";

export default function MainChartContainer(props) {
    const style = {
        width: props.dimensions.w,
    };
    return (
        <td style={style} id="main-chart-super-container">
            <div id="main-chart-container">
                <BackMainChartCanvas {...props}/>
                <MainChartCanvas {...props}/>
                <TopMainChartCanvas {...props} />
            </div>
        </td>
    )
}