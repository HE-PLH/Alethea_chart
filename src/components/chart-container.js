import React, {useContext, useEffect, useState} from "react";
import MainChartContainer from "./chart-main-container";
import {customSettings, userCoefficient, settings} from "../utilities/settings";
import {globals, main_elements} from "../utilities/globals";
import {
    bestPriceScale,
    coordinateFromData,
    getBestPriceScale,
    getBestTimeScale
} from "../utilities/main-data-converter";
import {execute_draw} from "../drawer/drawGraph";
import LeftYScale from "./left-y-scale";
import RightYScale from "./right-y-scale";
import {lazyEffect} from "../utilities/resize_throttle";
import XAxisTimeScaleContainer from "./x-axis-time-scale";
import {drawHorizontalScale, drawVerticalScale} from "../utilities/scale-renderer";
import {addXPoints} from "../utilities/time-scale";
import {AdjustmentBtn} from "./adjustment-btn";
import ChartInfo from "./chart-info";
import { drawVolumes } from "../drawer/draw-volumes";
import {DataChangedContext} from "../contexts/contexts";
import {ExecuteChartTimeSplit} from "../utilities/time_division";

let initialDimensions = {w: window.innerWidth, h: window.innerHeight};

export default function ChartContainer(props) {
    const { dataChanged, setDatachanged } = useContext(DataChangedContext);
    const [timeScale, setTimeScale] = useState(customSettings.timeScale);
    const [candleStick, setCandleStick] = useState(customSettings.candleStick);
    const [barGraph, setBarGraph] = useState(customSettings.barGraph);
    const [volumeGraph, setVolumeGraph] = useState(customSettings.volumeGraph);
    const [yScale, setYScale] = useState(customSettings.yScale);
    const [fullDimensions, setFullDimensions] = useState(initialDimensions);
    const [canvasDimensions, setCanvasDimensions] = useState({});
    const [leftYScaleTotalDimensions, setLeftYScaleTotalDimensions] = useState(settings.canvas.priceCanvasMain.dimensions);
    const [leftYScaleNo, setLeftYScaleNo] = useState(settings.initial.left);
    const [rightYScaleNo, setRightYScaleNo] = useState(settings.initial.right);
    const [rightYScaleTotalDimensions, setRightYScaleTotalDimensions] = useState(settings.canvas.priceCanvasMain.dimensions);
    // const { virtual_data, setVirtualData } = useCo ntext(VirtualDataContext);

    const initiateDimensions = ()=>{
        let d;
        setFullDimensions({w: window.innerWidth, h: window.innerHeight});
        d = document.getElementById("main-body-chart-container").getBoundingClientRect();
        globals.canvasOffset = {
            left: d.x,
            top: d.y,
        };
        let l = settings.canvas.priceCanvasMain.dimensions.w * leftYScaleNo;
        let r = settings.canvas.priceCanvasMain.dimensions.w * rightYScaleNo;
        d = {w: d.width - (l + r), h: d.height - 40};
        setCanvasDimensions(d);
        setLeftYScaleTotalDimensions({w: l, h: d.h});
        setRightYScaleTotalDimensions({w: r, h: d.h});
        setVolumeGraph({top: d.h - volumeGraph.height, height: volumeGraph.height});
        settings.canvas.main.dimensions = d;
        customSettings.volume_scale.volumeBottomLimit = volumeGraph.height;
        let scale = yScale;
        scale.yBottomLimit = d.h-scale.initial_bottom_offset;
        setYScale(scale);
    };

    
    useEffect(() => {
        // setVirtualData(ExecuteChartTimeSplit(my_data, timeScale.timeDivider));
        globals.virtual_data = (ExecuteChartTimeSplit(globals.my_data, customSettings.timeScale.timeDivider));
        draw();
        // console.log(virtual_data)
    }, [dataChanged]);

    useEffect(() => {
        initiateDimensions();
    }, [])

/*
    useEffect(()=>{
        if (displayGraph){
            console.log("true")
        }else {
            console.log("false")
        }
    }, []);*/

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
        if(customSettings.candleStick.barWidth>0) {
            if(globals.virtual_data){
                globals.approximateCandleWidth = customSettings.timeScale.barSpacing + customSettings.candleStick.barWidth;
                globals.all_coordinates = coordinateFromData(globals.virtual_data, canvasDimensions);
                execute_draw(props.chartType, canvasDimensions);
            }
        }
        
        drawYScale();
        drawXScale();
        drawVol();
    };
    const drawXScale = ()=>{
        // addXPoints(globals.ultimateTotalXScale, 0);
        /*for (let i in globals.ultimateTotalXScale) {
            if(globals.ultimateTotalXScale[i].weight === 70){
                console.log(globals.ultimateTotalXScale[i])
            }
        }
        console.log("       ")*/
        getBestTimeScale(parseInt(canvasDimensions.w/100), canvasDimensions);
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

    const drawVol = () =>{
        drawVolumes(globals.volume_context, {w: canvasDimensions.w, h:  volumeGraph.height});
    }

    return (
        <div style={{position: "relative", height: "100%"}}>
            <div id="user-x-adjustment" className="hide">
                <AdjustmentBtn id="zoom-in" text = "+" draw = {draw} />
                <AdjustmentBtn id="zoom-out" text = "-" draw = {draw} />
                <AdjustmentBtn id="scroll-left" text = "<" draw = {draw} />
                <AdjustmentBtn id="scroll-right" text = ">" draw = {draw} />
                <AdjustmentBtn id="reset-chart" text = "R" draw = {draw} />
            </div>
            <div style={{width: "100%", height: "100%", position: "absolute"}}>
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
                                    timeScale = {timeScale}
                                    x_scale_dimensions = {{w: canvasDimensions.w, h: 40}}
                                    y_scale_dimensions = {{w: settings.canvas.priceCanvasMain.dimensions.w, h: rightYScaleTotalDimensions.h}}
                                    volumeTop = {volumeGraph.top}
                                    volumeHeight = {volumeGraph.height}
                                    drawVolume = {drawVol}
                                    // setDisplayGraph = {setDisplayGraph}
                                    // displayGraph = {displayGraph}
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
                                candleStick = {candleStick}
                                setCandleStick = {setCandleStick}
                                draw = {draw}
                            />

                    </tbody>
                </table>
            </div>
        </div>
    )
}