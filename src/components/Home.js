import React, {useEffect, useState} from 'react'
import TopNavMajor from "./top-nav-bar";
import ChartOptionsNav from "./chart-options-nav";
import ChartWidget from "./chart_widget";
import BottomComponent from "./bottom";
import {customSettings, settings} from "../utilities/settings";
import ChartSettings from "./chart-settings-gui";
import {globals} from "../utilities/globals";
import {dimensionsMaster} from "../utilities/change-dimensions";
import LeftBodyContainer from "./left-body-container";
import RightBodyContainer from "./right-body-container";
import {ChartWidgetMainBody} from "./chart-widget-main-body";

export default function Home(){
    const [candleChange, setCandleChange] = useState(1);
    const [chartType, setChartType] = useState(customSettings.chart.type);
    const [show, setShow] = useState("hide");
    const [dimensionsChanged, setDimensionsChanged] = useState(0);
    const [fullDimensions, setFullDimensions] = useState({w: 0, h: 0});
    const [canvasDimensions, setCanvasDimensions] = useState({});
    const [leftYScaleTotalDimensions, setLeftYScaleTotalDimensions] = useState(settings.canvas.priceCanvasMain.dimensions);
    const [leftYScaleNo, setLeftYScaleNo] = useState(settings.initial.left);
    const [rightYScaleNo, setRightYScaleNo] = useState(settings.initial.right);
    const [rightYScaleTotalDimensions, setRightYScaleTotalDimensions] = useState(settings.canvas.priceCanvasMain.dimensions);

    const menuClick = () => {
        if (show === "hide"){
            document.querySelectorAll(".dropdown-div").forEach((el)=>{
                el.classList.remove("show")
            });
            setShow("show")
        }else
        if (show === "show"){
            document.querySelectorAll(".dropdown-div").forEach((el)=>{
                el.classList.remove("show")
            });
            setShow("hide")
        }
    };
    const change = ()=>{
        setCandleChange((candleChange+1)%5)
    };

    const initiateDimensions = ()=>{
        let width = window.innerWidth;
        let height = window.innerHeight;
        setDimensionsChanged((dimensionsChanged+1)%5)
        setFullDimensions({w: width, h: height});
        globals.dimensions_Master = dimensionsMaster({w: width, h: height});

    };
    useEffect(()=> {
        const _throttledResize = function resize() {
            initiateDimensions();
        };
        initiateDimensions();
        window.addEventListener('resize', _throttledResize);
        return _ => {
            window.removeEventListener("resize", _throttledResize);
        }
    }, []);

    return (
        <div id="chart-app-home" className="chart-app-container" style={{width: fullDimensions.w, height: fullDimensions.h, overflow: "hidden"}}>
            <TopNavMajor dimensionsChanged = {dimensionsChanged}/>
            <ChartOptionsNav dimensionsChanged = {dimensionsChanged} menuClick={menuClick} setChartType = {setChartType}/>
            <ChartSettings show={show} menuClick={menuClick} change = {change}/>
            <ChartWidgetMainBody fd = {fullDimensions} dimensionsChanged = {dimensionsChanged} candleChange = {candleChange} chartType = {chartType}/>
            <BottomComponent fd = {fullDimensions}  dimensionsChanged = {dimensionsChanged}/>
        </div>
    )
}