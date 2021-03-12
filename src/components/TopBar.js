import React, {useState} from "react";
import ActionButton from "./action";
import {Dropdown, DropdownItem} from "./dropdown";
import {customSettings} from "../utilities/settings";
import {execute_draw} from "../drawer/drawGraph";

function ActionButtons(props) {
    const style = {
        //width: 100+"px",
    };

    const [show, setShow] = useState("hide");

    const itemChosen = (e)=>{
        let txt = e.target.querySelector("._text").textContent;
        let lst = txt.split("-");
        let first = lst[1][0].toUpperCase();
        txt = lst[1].slice(1, lst[1].length);
        txt = lst[0]+first+txt;
        props.setChartType(txt);
        setShow("hide")
    };


    const menuClick = (e)=>{
        if (show === "hide"){
            setShow("show")
        }else
        if (show === "show"){
            setShow("hide")
        }
    };
    return (
        <div style={style}  id="action-buttons-container" role = "menu">
          <ActionButton dimensions = {{w: 50, h: 30}} text = {"Apple Inc"} icon = {{name: "star-shield"}}>
              <Dropdown width = "150px" height = {"200px"} show = "hide">
                  <DropdownItem dimensions = {{w: 50, h: 30}} text = {'BIT'} icon = {{name: "candle-stick", width: 28, height: 28}}/>
                  <DropdownItem dimensions = {{w: 50, h: 30}} text = {'TSL'} icon = {{name: "bar-graph", width: 28, height: 28}}/>
                  <DropdownItem dimensions = {{w: 50, h: 30}} text = {'TWT'} icon = {{name: "line-graph", width: 28, height: 28}}/>
                  <DropdownItem dimensions = {{w: 50, h: 30}} text = {'KIK'} icon = {{name: "area-graph", width: 28, height: 28}}/>
              </Dropdown>
          </ActionButton>
          <ActionButton dimensions = {{w: 50, h: 30}} text = {'Compare'} icon = {{name: "compare", width: 28, height: 28}} arrow = "arrow-down"/>
          <ActionButton click = {menuClick} dimensions = {{w: 50, h: 30}} text = {''} icon = {{name: "candle-stick", width: 28, height: 28}}>
              <Dropdown width = "150px" height = {"200px"} show = {show}>
                  <DropdownItem dimensions = {{w: 50, h: 30}} text = {'candle-stick'} click = {itemChosen} icon = {{name: "candle-stick", width: 28, height: 28}}/>
                  <DropdownItem dimensions = {{w: 50, h: 30}} text = {'bar-graph'} click = {itemChosen} icon = {{name: "bar-graph", width: 28, height: 28}}/>
                  <DropdownItem dimensions = {{w: 50, h: 30}} text = {'line-graph'} click = {itemChosen} icon = {{name: "line-graph", width: 28, height: 28}}/>
                  <DropdownItem dimensions = {{w: 50, h: 30}} text = {'area-graph'} click = {itemChosen} icon = {{name: "area-graph", width: 28, height: 28}}/>
              </Dropdown>
          </ActionButton>
          <ActionButton dimensions = {{w: 50, h: 30}} text = {'Indicators'} icon = {{name: "cat-jewel"}}/>
        </div>
    )
}

export default ActionButtons;