import React, {useState} from "react";
import {Dropdown, DropdownItem} from "./dropdown";
import ActionButton from "./action";

export function ChartAction(props) {
    const [show, setShow] = useState("hide");
    const [text, setText] = useState("candle-stick");


     const menuClick = () => {
        if (show === "hide"){
            document.querySelectorAll(".dropdown-div").forEach((el)=>{
                el.classList.remove("show")
            });
            setShow("show")
        }else
        if (show === "show"){
            document.querySelectorAll(".dropdown-div").forEach((el)=>{
                el.classList.remove("show")
            });
            setShow("hide")
        }
    };

    const itemChosen = (e)=>{
        let txt = e.target.querySelector("._text").textContent;
        setText(txt);
        let lst = txt.split("-");
        let first = lst[1][0].toUpperCase();
        txt = lst[1].slice(1, lst[1].length);
        txt = lst[0]+first+txt;
        props.setChartType(txt);
        setShow("hide")
    };

    return (
        <ActionButton click = {menuClick} dimensions = {{w: 50, h: 30}} text = {''} icon = {{name: text, width: 28, height: 28}}>
              <Dropdown width = "150px" height = {"200px"} show = {show}>
                  <DropdownItem type = "normal" dimensions = {{w: 50, h: 30}} text = {'candle-stick'} click = {itemChosen} icon = {{name: "candle-stick", width: 28, height: 28}}/>
                  <DropdownItem type = "normal" dimensions = {{w: 50, h: 30}} text = {'bar-graph'} click = {itemChosen} icon = {{name: "bar-graph", width: 28, height: 28}}/>
                  <DropdownItem type = "normal" dimensions = {{w: 50, h: 30}} text = {'line-graph'} click = {itemChosen} icon = {{name: "line-graph", width: 28, height: 28}}/>
                  <DropdownItem type = "normal" dimensions = {{w: 50, h: 30}} text = {'area-graph'} click = {itemChosen} icon = {{name: "area-graph", width: 28, height: 28}}/>
              </Dropdown>
          </ActionButton>
    )
}