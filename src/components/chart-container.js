import React, {useEffect, useState} from "react";
import MainChartContainer from "./chart-main-container";
import {customSettings, userCoefficient, settings} from "../utilities/settings";
import {globals, main_elements} from "../utilities/globals";
import {
    bestPriceScale,
    coordinateFromData,
    getBestPriceScale,
    getBestTimeScale
} from "../utilities/main-data-converter";
import {data} from "../data/sample_data";
import {execute_draw} from "../drawer/drawGraph";
import LeftYScale from "./left-y-scale";
import RightYScale from "./right-y-scale";
import {Creator} from "../utilities/chart-canvas";
import {lazyEffect} from "../utilities/resize_throttle";
import XAxisTimeScaleContainer from "./x-axis-time-scale";
import {drawHorizontalScale, drawVerticalScale} from "../utilities/scale-renderer";
import {addXPoints} from "../utilities/time-scale";

let initialDimensions = {w: window.innerWidth, h: window.innerHeight};

export default function ChartContainer(props) {
    const [my_data, setData] = useState(data);
    const [timeScale, setTimeScale] = useState(customSettings.timeScale);
    const [candleStick, setCandleStick] = useState(customSettings.candleStick);
    const [barGraph, setBarGraph] = useState(customSettings.barGraph);
    const [yScale, setYScale] = useState(customSettings.yScale);
    const [fullDimensions, setFullDimensions] = useState(initialDimensions);
    const [canvasDimensions, setCanvasDimensions] = useState(settings.canvas.main.dimensions);
    const [leftYScaleTotalDimensions, setLeftYScaleTotalDimensions] = useState(settings.canvas.priceCanvasMain.dimensions);
    const [leftYScaleNo, setLeftYScaleNo] = useState(settings.initial.left);
    const [rightYScaleNo, setRightYScaleNo] = useState(settings.initial.right);
    const [rightYScaleTotalDimensions, setRightYScaleTotalDimensions] = useState(settings.canvas.priceCanvasMain.dimensions);

    const initiateDimensions = ()=>{
        let d, td_cont;
        setFullDimensions({w: window.innerWidth, h: window.innerHeight});
        d = document.getElementById("main-body-chart-container").getBoundingClientRect();
        let l = settings.canvas.priceCanvasMain.dimensions.w * leftYScaleNo;
        let r = settings.canvas.priceCanvasMain.dimensions.w * rightYScaleNo;
        let cont = document.getElementById("main-chart-container");
        d = {w: d.width - (l + r), h: d.height - 40};
        setCanvasDimensions(d);

        setLeftYScaleTotalDimensions({w: l, h: d.h});
        setRightYScaleTotalDimensions({w: r, h: d.h});
        settings.canvas.main.dimensions = d;
        let scale = yScale;
        scale.yBottomLimit = d.h;
        setYScale(scale);
        /*td_cont = document.getElementById("chart-body-container");
        td_cont.style.width = `${d.w}px`;
        td_cont.style.height = `${d.h}px`;
        cont.style.width = `${d.w}px`;
        cont.style.height = `${d.h}px`;*/
    };

    useEffect(()=>{
        initiateDimensions();
    }, []);

    useEffect(()=> {
        const _throttledResize = function resize() {
            initiateDimensions();
        };
        window.addEventListener('resize', _throttledResize);
        return _ => {
            window.removeEventListener("resize", _throttledResize);
        }
    }, []);


    const draw = ()=>{
        customSettings.timeScale = timeScale;
        customSettings.candleStick = candleStick;
        customSettings.barGraph = barGraph;
        customSettings.yScale = yScale;
        customSettings.chartType = props.chartType;

        globals.approximateCandleWidth = timeScale.barSpacing+candleStick.barWidth;

        globals.all_coordinates = coordinateFromData(my_data, canvasDimensions);
        execute_draw(props.chartType, canvasDimensions);
        drawYScale();
        drawXScale();
    };
    const drawXScale = ()=>{
        addXPoints(globals.ultimateTotalXScale, 0);
        /*for (let i in globals.ultimateTotalXScale) {
            if(globals.ultimateTotalXScale[i].weight === 70){
                console.log(globals.ultimateTotalXScale[i])
            }
        }
        console.log("       ")*/
        getBestTimeScale(10, canvasDimensions);
        drawHorizontalScale(
            globals.time_canvas_main_view_context,
            globals.main_canvas_top_view_context,
            globals.xAxisList,
            canvasDimensions,
            {w: canvasDimensions.w, h: 40},
            barGraph,
            candleStick.barWidth
        )
        /*customSettings.timeScale = timeScale;
        customSettings.candleStick = candleStick;
        customSettings.barGraph = barGraph;
        customSettings.yScale = yScale;
        customSettings.chartType = chartType;

        globals.approximateCandleWidth = timeScale.barSpacing+candleStick.barWidth;

        globals.all_coordinates = (coordinateFromData(my_data));
        execute_draw();*/
    };
    const drawYScale = ()=>{
        getBestPriceScale(10, canvasDimensions);
        drawVerticalScale(
            globals.price_canvas_main_view_context,
            globals.main_canvas_top_view_context,
            globals.yAxisList,
            canvasDimensions,
            {w: globals.scaleWidth, h: rightYScaleTotalDimensions.h},
            barGraph
            );

        /*customSettings.timeScale = timeScale;
        customSettings.candleStick = candleStick;
        customSettings.barGraph = barGraph;
        customSettings.yScale = yScale;
        customSettings.chartType = chartType;

        globals.approximateCandleWidth = timeScale.barSpacing+candleStick.barWidth;

        globals.all_coordinates = (coordinateFromData(my_data));
        execute_draw();*/
    };

    return (
        <table id="super-chart-widget">
            <tbody className="col-frame">
                <tr id="chart-body-container" className="row-frame">
                    <LeftYScale drawYScale = {drawYScale} dimensions = {leftYScaleTotalDimensions}/>
                    {/*{leftYScaleTotalDimensions>0?
                        <LeftYScale dimensions={props.dimensions}/>:""
                    }*/}
                    <MainChartContainer
                            draw = {draw}
                            dimensions  = {canvasDimensions}
                            candleStick = {candleStick}
                            x_scale_dimensions = {{w: canvasDimensions.w, h: 40}}
                            y_scale_dimensions = {{w: settings.canvas.priceCanvasMain.dimensions.w, h: rightYScaleTotalDimensions.h}}
                        />

                    <RightYScale draw = {draw} drawYScale = {drawYScale} dimensions = {rightYScaleTotalDimensions}/>
                    {/*{rightYScaleTotalDimensions>0?
                        <RightYScale dimensions={rightYScaleTotalDimensions} number={rightYScaleNo}/>:""
                    }*/}
                </tr>
                    <XAxisTimeScaleContainer
                        leftWidth = {leftYScaleTotalDimensions.w}
                        mainWidth = {canvasDimensions.w}
                        rightWidth = {rightYScaleTotalDimensions.w}
                        height = {40}
                        drawXScale = {drawXScale}
                    />

            </tbody>
        </table>
    )
}