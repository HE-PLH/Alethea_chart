import React from "react";
import {Dropdown, DropdownItem} from "./dropdown";
import ActionButton from "./action";


export function ComparatorAction(props) {


    return (
        <ActionButton dimensions = {{w: 50, h: 30}} text = {'Compare'} icon = {{name: "compare", width: 28, height: 28}} arrow = "arrow-down"/>
    )
}