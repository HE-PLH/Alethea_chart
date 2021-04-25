import React, {useState} from 'react'
import ChartSettingsTitle from "./cs-title";
import {Dropdown} from "./dropdown";
import ChartSettingsOptions from "./chart-settings-options";
import ChartSettingsItem from "./cs-item";

export default function ChartSettings(props){
    const [dimensions, setDimensions] = useState({top: "15%",left: "20%"});
    const [displayTab, setDisplayTab] = useState("symbol");
    const [bgColor, setBgColor] = useState("bgColor2");

    return (
        <div className={`chart-settings-container ${props.show}`} style={{top: dimensions.top,left: dimensions.left}}>
            <div className="cs-toolbar">
               <ChartSettingsTitle dimensions={dimensions} adjustDimensions = {setDimensions}/>
                <div onClick={props.menuClick} className="cs-close-btn">
                    X
                </div>
            </div>
            <ChartSettingsOptions setDisplayTab = {setDisplayTab}/>
            <div className="cs-content-body">
                {displayTab==="symbol"?
                    <>
                    <ChartSettingsItem color2={true} title="show body" type = "candle" checkbox={true} {...props}/>
                    <ChartSettingsItem color2={true} title="show border" type = "border" checkbox={true} {...props}/>
                    <ChartSettingsItem color2 = {true} title="show wick" type = "wick" checkbox={true} {...props}/>
                    </>
                    :null
                }

                {displayTab==="axis"?
                    <>
                    {/*<ChartSettingsItem bgColor={bgColor} setBgColor={setBgColor} select={true} title="Background" type = "candle" {...props}/>*/}
                    {/*<ChartSettingsItem color2={true} title="show border" type = "border" checkbox={true} {...props}/>*/}
                    {/*<ChartSettingsItem color2 = {true} title="show wick" type = "wick" checkbox={true} {...props}/>*/}
                    </>
                    :null
                }

                {displayTab==="chart"?
                    <>
                    <ChartSettingsItem bgColor={bgColor} setBgColor={setBgColor} select={true} title="Background" type = "candle" {...props}/>
                    {/*<ChartSettingsItem color2={true} title="show border" type = "border" checkbox={true} {...props}/>*/}
                    {/*<ChartSettingsItem color2 = {true} title="show wick" type = "wick" checkbox={true} {...props}/>*/}
                    </>
                    :null
                }

            </div>
        </div>

    )
}