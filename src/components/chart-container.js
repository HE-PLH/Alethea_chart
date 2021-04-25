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
import {drawVolumes} from "../drawer/draw-volumes";
import {DataChangedContext} from "../contexts/contexts";
import {ExecuteChartTimeSplit} from "../utilities/time_division";
import {clearCoordinates} from "../utilities/clear-ctx";
import ChartWidget from "./chart_widget";

let initialDimensions = {w: window.innerWidth, h: window.innerHeight};

export default function ChartContainer(props) {
    const {dataChanged, setDatachanged} = useContext(DataChangedContext);
    const [timeScale, setTimeScale] = useState(customSettings.timeScale);
    const [barGraph, setBarGraph] = useState(customSettings.barGraph);
    const [volumeGraph, setVolumeGraph] = useState(customSettings.volumeGraph);
    const [yScale, setYScale] = useState(customSettings.yScale);
    const [tableDimensions, setTableDimensions] = useState({w: 0, h: 0});
    const [canvasDimensions, setCanvasDimensions] = useState({w: 0, h: 0});
    const [chartBody, setChartBody] = useState({w: 0, h: 0});
    const [chartWidget, setChartWidget] = useState({w: 0, h: 0});
    const [leftYScaleTotalDimensions, setLeftYScaleTotalDimensions] = useState(settings.canvas.priceCanvasMain.dimensions);
    const [timeAxisDimensions, setTimeAxisDimensions] = useState({});
    const [leftYScaleNo, setLeftYScaleNo] = useState(settings.initial.left);
    const [rightYScaleNo, setRightYScaleNo] = useState(settings.initial.right);
    const [rightYScaleTotalDimensions, setRightYScaleTotalDimensions] = useState(settings.canvas.priceCanvasMain.dimensions);
    // const { virtual_data, setVirtualData } = useContext(VirtualDataContext);

    useEffect(() => {
        globals.virtual_data = (ExecuteChartTimeSplit(globals.my_data, customSettings.timeScale.timeDivider));
        globals.c_change = true;
        draw();
    }, [dataChanged]);


    useEffect(() => {
        if (globals.dimensions_Master.canvasDimensions !== undefined) {
            setCanvasDimensions(globals.dimensions_Master.canvasDimensions);
            setTableDimensions(globals.dimensions_Master.tableWidget);
            setLeftYScaleTotalDimensions(globals.dimensions_Master.leftAxis);
            setRightYScaleTotalDimensions(globals.dimensions_Master.rightAxis);
            setTimeAxisDimensions(globals.dimensions_Master.bottomAxis);
            setChartBody(globals.dimensions_Master.chartBody);
            setChartWidget(globals.dimensions_Master.chartWidget);
            let scale = yScale;
            scale.yBottomLimit = globals.dimensions_Master.canvasDimensions.h - scale.initial_bottom_offset;
            setYScale(scale);
            setVolumeGraph({
                top: globals.dimensions_Master.canvasDimensions.h - volumeGraph.height,
                height: volumeGraph.height
            });
            settings.canvas.main.dimensions = globals.dimensions_Master.canvasDimensions;
        }
    }, [props.fd]);


    const draw = () => {
        if (customSettings.candleStick.barWidth > 0) {
            if (globals.virtual_data) {
                globals.approximateCandleWidth = customSettings.timeScale.barSpacing + customSettings.candleStick.barWidth;
                if (globals.all_coordinates) {
                    clearCoordinates(globals.all_coordinates, canvasDimensions);
                }
                if (globals.c_change) {
                    globals.all_coordinates = coordinateFromData(globals.virtual_data, canvasDimensions);
                }
                execute_draw(props.chartType, canvasDimensions);
            }
        }

        drawYScale();
        drawXScale();
        drawVol();
    };
    const drawXScale = () => {
        getBestTimeScale(parseInt(canvasDimensions.w / 100), canvasDimensions);
        drawHorizontalScale(
            globals.time_canvas_main_view_context,
            globals.main_canvas_top_view_context,
            globals.xAxisList,
            canvasDimensions,
            {w: canvasDimensions.w, h: 40},
            barGraph,
            customSettings.candleStick.barWidth
        )
    };
    const drawYScale = () => {
        getBestPriceScale(10, canvasDimensions);
        drawVerticalScale(
            globals.price_canvas_main_view_context,
            globals.main_canvas_top_view_context,
            globals.yAxisList,
            canvasDimensions,
            {w: globals.scaleWidth, h: rightYScaleTotalDimensions.h},
            barGraph
        );
    };

    const drawVol = () => {
        drawVolumes(globals.volume_context, {w: canvasDimensions.w, h: volumeGraph.height});
    };

    return (
        <div style={{position: "relative", width: tableDimensions.w, height: tableDimensions.h}}>
            <div id="user-x-adjustment" className="hide">
                <AdjustmentBtn id="zoom-in" text="+" draw={draw}/>
                <AdjustmentBtn id="zoom-out" text="-" draw={draw}/>
                <AdjustmentBtn id="scroll-left" text="<" draw={draw}/>
                <AdjustmentBtn id="scroll-right" text=">" draw={draw}/>
                <AdjustmentBtn id="reset-chart" text="R" draw={draw}/>
            </div>
            <div style={{position: "relative", width: tableDimensions.w, height: tableDimensions.h}}>
                <table id="super-chart-widget" style={{width: tableDimensions.w, height: tableDimensions.h}}>
                    <tbody className="col-frame" id="my_t_body" style={{width: tableDimensions.w, height: tableDimensions.h}}>
                    <tr id="chart-body-container" className="row-frame" style={{width: tableDimensions.w, height: canvasDimensions.h}}>
                        <LeftYScale drawYScale={drawYScale} dimensions={leftYScaleTotalDimensions}/>
                        {/*{leftYScaleTotalDimensions>0?
                                <LeftYScale dimensions={props.dimensions}/>:""
                            }*/}
                        <MainChartContainer
                            draw={draw}
                            dimensions={canvasDimensions}
                            x_scale_dimensions={{w: canvasDimensions.w, h: 40}}
                            y_scale_dimensions={{
                                w: settings.canvas.priceCanvasMain.dimensions.w,
                                h: rightYScaleTotalDimensions.h
                            }}
                            volumeTop={volumeGraph.top}
                            volumeHeight={volumeGraph.height}
                            drawVolume={drawVol}
                        />

                        <RightYScale draw={draw} drawYScale={drawYScale} dimensions={rightYScaleTotalDimensions}/>
                        {/*{rightYScaleTotalDimensions>0?
                                <RightYScale dimensions={rightYScaleTotalDimensions} number={rightYScaleNo}/>:""
                            }*/}
                    </tr>
                    <XAxisTimeScaleContainer
                        leftWidth={leftYScaleTotalDimensions.w}
                        mainWidth={canvasDimensions.w}
                        rightWidth={rightYScaleTotalDimensions.w}
                        width={timeAxisDimensions.w}
                        height={timeAxisDimensions.h}
                        drawXScale={drawXScale}
                        candleStick={customSettings.candleStick}
                        draw={draw}
                    />

                    </tbody>
                </table>
            </div>
        </div>
    )
}