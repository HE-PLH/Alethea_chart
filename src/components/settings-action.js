import React, {useState} from "react";
import {Dropdown, DropdownItem} from "./dropdown";
import ActionButton from "./action";
import ChartSettings from "./chart-settings-gui";


export function SettingsAction(props) {

    return (
        <ActionButton click={props.menuClick} dimensions = {{w: 50, h: 30}} icon = {{name: "settings", width: 28, height: 28}}>

        </ActionButton>
    )
}