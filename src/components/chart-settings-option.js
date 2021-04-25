import React, {useState} from 'react'

export default function ChartSettingsOption(props){
    const on_click = (e)=>{
        props.setDisplayTab(props.cs_title);
        props.on_click(e);
    };
    return (
        <div onClick={on_click} className={props.cls||"cs-option"}><span>{props.cs_title}</span></div>
    )
}
