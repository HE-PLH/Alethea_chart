import React, {useContext, useEffect, useState} from "react";
import {ItemTitle} from "./item-title-name";
import {ItemTitleOHCL} from "./item-title-ohcl";
import {clearCoordinates} from "../utilities/clear-ctx";
import {globals} from "../utilities/globals";
import { ChartInfoContext } from "../contexts/contexts";
export default function ChartInfo(props) {
    const [showTitle, setShowTitle] = useState("hide");
    const [showOHCL, setShowOHCL] = useState("hide");
    const [displayGraph, setDisplayGraph] = useState(true);
    const {record} = useContext(ChartInfoContext);

    const on_click = (e)=>{
        let t = showTitle === "hide"?"show":"hide";
        setShowTitle(t);
    };
    const on_click1 = (e)=>{
        let t = showOHCL === "hide"?"show":"hide";
        setShowOHCL(t);
    };
    const on_click2 = (e)=>{
        let t = !displayGraph;
        if(t){
            props.draw();
        }else {
            clearCoordinates(globals.all_coordinates, props.dimensions);
        }
        setDisplayGraph(t);
    };

    return (
        <div className="chart-top-information" style={{maxWidth: props.dimensions.w}}>
            <div className="top-chart-title-and-ohcl">
                <div className="top-title">
                    <svg onClick={on_click} className="ic show-title" width="24px" height="24px">
                        <use xlinkHref={"../media/icons/svg_icons.svg#arrow-left"}></use>
                    </svg>
                    <ItemTitle show = {showTitle}/>
                    <svg onClick={on_click2} className="ic show-graph" width="24px" height="24px">
                        <use xlinkHref={"../media/icons/svg_icons.svg#visibility"}></use>
                    </svg>
                    <svg onClick={on_click1} className="ic show-ohcl" width="24px" height="24px">
                        <use xlinkHref={"../media/icons/svg_icons.svg#arrow-left"}></use>
                    </svg>
                    <ItemTitleOHCL record = {record} show = {showOHCL}/>
                </div>
                <div className="top-title-price-display">
                    
                </div>
            </div>
            <div className="top-volume-display">
                {/* <svg onClick={on_click} className="ic show-title" width="24px" height="24px">
                    <use xlinkHref={"../media/icons/svg_icons.svg#arrow-left"}></use>
                </svg>
                <div>volume : 779809</div> */}
            </div>
        </div>
    )
}