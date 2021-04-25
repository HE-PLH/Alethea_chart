import React, {useState} from 'react'
import ChartSettingsOption from "./chart-settings-option";

export default function ChartSettingsOptions(props){
    const on_click = (e)=>{
        document.querySelectorAll(".cs-option").forEach((el)=>{
            el.style.backgroundColor = "initial";
        });
        e.target.style.backgroundColor = "#00aef6";
    };
    return (
        <div className="cs-options">
            <ChartSettingsOption on_click={on_click} cs_title="symbol" cls="cs-option cs-option-start" {...props}/>
            <ChartSettingsOption on_click={on_click} cs_title="axis" {...props}/>
            <ChartSettingsOption on_click={on_click} cs_title="chart" {...props}/>
        </div>

    )
}
