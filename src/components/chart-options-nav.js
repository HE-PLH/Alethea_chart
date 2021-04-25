import ChartContainer from "./chart-container";
import React from "react";
import ActionButtons from "./TopBar";
import {globals} from "../utilities/globals";


export default function ChartOptionsNav(props) {
    return (
        <div className="chart-options row-frame tops" style={{width: "100%", height: globals.dimensions_Master.chooseTab||0}}>
            <ActionButtons {...props}/>
        </div>
    )
}