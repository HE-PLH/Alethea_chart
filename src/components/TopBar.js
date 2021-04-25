import React, {useState} from "react";
import ActionButton from "./action";
import {Dropdown, DropdownItem} from "./dropdown";
import {customSettings} from "../utilities/settings";
import {execute_draw} from "../drawer/drawGraph";
import {SymbolAction} from "./choose-symbol-sction";
import {ComparatorAction} from "./choose-comparator-action";
import {IndicatorAction} from "./choose-indicator-action";
import {ChartAction} from "./chart-choos-action";
import {TimeDivisionAction} from "./division-choose";
import {SettingsAction} from "./settings-action";

function ActionButtons(props) {
    const style = {
        //width: 100+"px",
    };

    return (
        <div style={style}  id="action-buttons-container" role = "menu">
            <SymbolAction/>
            <ComparatorAction/>
            <ChartAction setChartType = {props.setChartType}/>
            <IndicatorAction/>
            <TimeDivisionAction />
            <SettingsAction menuClick={props.menuClick}/>
        </div>
    )
}

export default ActionButtons;