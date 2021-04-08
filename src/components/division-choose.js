import React, {useContext, useState} from "react";
import {Dropdown, DropdownItem} from "./dropdown";
import ActionButton from "./action";
import {ChartAction} from "./chart-choos-action";
import {SearchBar} from "./search";
import { ExecuteChartTimeSplit } from "../utilities/time_division";
import {DataChangedContext} from "../contexts/contexts"
import { globals } from "../utilities/globals";
import {customSettings} from "../utilities/settings";


export function TimeDivisionAction(props) {
    const [show, setShow] = useState("hide");
    const [txt, setTxt] = useState("1D");
    const {dataChanged, setDatachanged} = useContext(DataChangedContext);
    const menuClick = () => {
        if (show === "hide"){
            document.querySelectorAll(".dropdown-div").forEach((el)=>{
                el.classList.remove("show")
            });
            setShow("show")
        }else if (show === "show"){
            document.querySelectorAll(".dropdown-div").forEach((el)=>{
                el.classList.remove("show")
            });
            setShow("hide")
        }
    };

    const itemChosen = (e)=>{
        let txt = e.target.querySelector("._text").textContent;
        setDatachanged((dataChanged+1)%5);
        setTxt(txt);
        customSettings.timeScale.timeDivider = parseInt(txt)===1?txt.split(parseInt(txt))[1]:txt;
        setShow("hide");
    };

    return (
        <ActionButton click = {menuClick} dimensions = {{w: 50, h: 30}} text = {txt}>
            <Dropdown width = "50px" height = {"200px"} show = {show}>
                {/* <DropdownItem type = "normal" dimensions = {{w: 50, h: 30}} text = {'1MS'} click = {itemChosen}/> */}
                {/* <DropdownItem type = "normal" dimensions = {{w: 50, h: 30}} text = {'1S'} click = {itemChosen}/> */}
                <DropdownItem type = "normal" dimensions = {{w: 50, h: 30}} text = {'1D'} click = {itemChosen}/>
                <DropdownItem type = "normal" dimensions = {{w: 50, h: 30}} text = {'1W'} click = {itemChosen}/>
                {/* <DropdownItem type = "normal" dimensions = {{w: 50, h: 30}} text = {'2W'} click = {itemChosen}/> */}
                <DropdownItem type = "normal" dimensions = {{w: 50, h: 30}} text = {'1M'} click = {itemChosen}/>
                <DropdownItem type = "normal" dimensions = {{w: 50, h: 30}} text = {'1Y'} click = {itemChosen}/>
            </Dropdown>   
        </ActionButton>
    )
}