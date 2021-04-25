import React, {useState} from 'react'
import {customSettings} from "../utilities/settings";

export default function ChartSettingsItem(props){
    let c, temp = [];
    const on_change_color = (e) => {
        let a = temp[e.target.getAttribute("data-count")];
        customSettings.candleStick[a] = e.target.value;
        props.change();
    };
    const on_change_bg_color = (e) => {
        let a = parseInt(e.target.getAttribute("data-count"));
        if (!a){
            customSettings.barGraph.background1 = e.target.value;
        }else{
            customSettings.barGraph.background2 = e.target.value;
        }
        props.change();
    };

    const getOurColor = ()=>{
        switch (props.type) {
            case "wick":
                return "wick";

            case "candle":
                return false;

            case "border":
                return "border";

        }
    };

    const getIncreaseColor = ()=>{
        let t = (c =getOurColor())?`${c}IncreaseColor`:"increaseColor";
        temp.push(t);
        return t;
    };

    const getDecreaseColor = ()=>{
        let t = (c =getOurColor())?`${c}DecreaseColor`:"decreaseColor";
        temp.push(t);
        return t;
    };
    const getCheck = ()=>{
        let t = "";
            switch (props.type) {
                case "wick":
                    t = "wickDisplay";
                    break;

                case "candle":
                    t = "bodyDisplay";
                    break;

                case "border":
                    t = "borderDisplay";
                    break;
            }
            return t;
    };
    const check = (e) => {
        customSettings.candleStick[getCheck()] = e.target.checked;
        props.change();
    };

    const on_select = (e) => {
        let v = e.target.value;
        customSettings.barGraph.background = `${v}`;
        switch (v) {
            case "solid":
                props.setBgColor("bgColor1");
                break;
            case "gradient":
                props.setBgColor("bgColor2");
                break;
        }
        props.change();
    };

    return (
        <div className="cs-item">
            {props.checkbox?
                <input type="checkbox" defaultChecked = {customSettings.candleStick[getCheck()]} onClick={check} className="cs-item-checkbox"/>
                :null
            }
            {props.title ?
                <div className="cs-item-name">
                    <span>{props.title}</span>
                    {props.select ?
                        <select className="bg-select" onChange={on_select}>
                            <option className="bg-opt">gradient</option>
                            <option className="bg-opt">solid</option>
                        </select>: null
                    }
                </div>:null
            }
            {props.color1 ?
                <div className="cs-item-color-choose">
                    <input data-count={0} type="color" onChange={on_change_color} defaultValue={customSettings.candleStick[getIncreaseColor]} className="color-input"/>
                </div>:null
            }
            {props.bgColor ==="bgColor1" ?
                <div className="cs-item-color-choose">
                    <input data-count={0} type="color" onChange={on_change_bg_color} defaultValue={customSettings.barGraph["background1"]} className="color-input"/>
                </div>:null
            }
            {props.bgColor ==="bgColor2" ?
                <div className="cs-item-color-choose">
                    <input data-count={0} type="color" onChange={on_change_bg_color} defaultValue={customSettings.barGraph["background1"]} className="color-input"/>
                    <input data-count={1} type="color" onChange={on_change_bg_color} defaultValue={customSettings.barGraph["background2"]} className="color-input"/>
                </div>:null
            }
            {props.color2 ?
                <div className="cs-item-color-choose">
                    <input data-count={0} type="color" onChange={on_change_color} defaultValue={customSettings.candleStick[getDecreaseColor()]} className="color-input"/>
                    <input data-count={1} type="color" onChange={on_change_color} defaultValue={customSettings.candleStick[getIncreaseColor()]} className="color-input"/>
                </div>:null
            }
        </div>

    )
}
