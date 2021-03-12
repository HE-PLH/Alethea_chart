import React, {useState} from 'react'
import TopNavMajor from "./top-nav-bar";
import ChartOptionsNav from "./chart-options-nav";
import ChartWidget from "./chart_widget";
import BottomComponent from "./bottom";
import {customSettings} from "../utilities/settings";

export default function Home(){

    const [chartType, setChartType] = useState(customSettings.chart.type);

    return (
        <div id="chart-app-home" className="chart-app-container full-width full-height col-frame">
            <TopNavMajor/>
            <ChartOptionsNav setChartType = {setChartType}/>
            <div id="main-body" className="full-width row-frame">
                <div id="left-body-container" className="full-height">

                </div>
                <div id="main-body-chart-container" className="full-height">
                    <ChartWidget chartType = {chartType}/>
                </div>
                <div id="right-body-container" className="full-height">

                </div>
            </div>
            <BottomComponent />
        </div>
    )
}