import React from "react";
import ChartContainer from "./chart-container";

export default function ChartWidget(props) {
    return (
        <div id="super-chart-widget-container">
            {/*<div id="user-x-adjustment">
                <button id="zoom-in" className="click-btns">+</button>
                <button id="zoom-out" className="click-btns">-</button>
                <button id="scroll-left" className="click-btns">{'<'}</button>
                <button id="scroll-right" className="click-btns">></button>
                <button id="reset-chart" className="click-btns">R</button>
            </div>
            <div id="user-graph-choice-container">
                <select id="user-graph-choice">
                    <option id="cdg">candleStick</option>
                    <option id="lng">lineGraph</option>
                    <option id="arg">areaGraph</option>
                    <option id="brg">barGraph</option>
                </select>
            </div>*/}
            <ChartContainer {...props}/>
        </div>

    )
}