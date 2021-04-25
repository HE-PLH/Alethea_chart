import React, {useEffect, useRef} from "react";
import ChartContainer from "./chart-container";
import {globals} from "../utilities/globals";

export default function ChartWidget(props) {

    return (
        <>
            <ChartContainer {...props}/>
        </>
    )
}