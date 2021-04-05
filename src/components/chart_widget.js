import React from "react";
import ChartContainer from "./chart-container";

export default function ChartWidget(props) {
    return (
        <div id="super-chart-widget-container">
            <ChartContainer {...props}/>
        </div>

    )
}