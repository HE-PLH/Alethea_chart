import ChartContainer from "./chart-container";
import React from "react";
import ActionButtons from "./TopBar";


export default function ChartOptionsNav(props) {
    return (
        <div className="chart-options row-frame tops">
            <ActionButtons {...props}/>
        </div>
    )
}