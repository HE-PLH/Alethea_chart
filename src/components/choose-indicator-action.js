import React from "react";
import {Dropdown, DropdownItem} from "./dropdown";
import ActionButton from "./action";


export function IndicatorAction(props) {



    return (
        <ActionButton dimensions = {{w: 50, h: 30}} text = {"Indicators"} icon = {{name: "cat-jewel"}}>
              <Dropdown width = "150px" height = {"200px"} show = "hide">
                  <DropdownItem type = "normal" dimensions = {{w: 50, h: 30}} text = {'BIT'} icon = {{name: "candle-stick", width: 28, height: 28}}/>
                  <DropdownItem type = "normal" dimensions = {{w: 50, h: 30}} text = {'TSL'} icon = {{name: "bar-graph", width: 28, height: 28}}/>
                  <DropdownItem type = "normal" dimensions = {{w: 50, h: 30}} text = {'TWT'} icon = {{name: "line-graph", width: 28, height: 28}}/>
                  <DropdownItem type = "normal" dimensions = {{w: 50, h: 30}} text = {'KIK'} icon = {{name: "area-graph", width: 28, height: 28}}/>
              </Dropdown>
          </ActionButton>
    )
}