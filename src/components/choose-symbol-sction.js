import React, {useState} from "react";
import {Dropdown, DropdownItem} from "./dropdown";
import ActionButton from "./action";
import {ChartAction} from "./chart-choos-action";
import {SearchBar} from "./search";


export function SymbolAction(props) {
    const [show, setShow] = useState("hide");
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
        let lst = txt.split("-");
        let first = lst[1][0].toUpperCase();
        txt = lst[1].slice(1, lst[1].length);
        txt = lst[0]+first+txt;
        props.setChartType(txt);
        setShow("hide")
    };

    return (
        <ActionButton click = {menuClick} dimensions = {{w: 50, h: 30}} text = {"Apple Inc"} icon = {{name: "star-shield"}}>
              <Dropdown  itemChosen = {itemChosen} show = {show} width = "300px" height = {"300px"}>
                  <SearchBar dimensions = {{w: 50, h: 40}} icon = {{name: "search", width: 24, height: 24}}/>
                  <DropdownItem type = "symbol-choose" dimensions = {{w: 50, h: 50}} text = {['AAPL', 'APPLE INC', 'stock', 'NASDAQ']} icon = {{name: "star", width: 28, height: 28}}/>
                  <DropdownItem type = "symbol-choose" dimensions = {{w: 50, h: 50}} text = {['BTCUSDT', 'BITCOIN / TETHERUS', 'crypto', 'BINANCE']} icon = {{name: "cat-tablet", width: 28, height: 28}}/>
                  <DropdownItem type = "symbol-choose" dimensions = {{w: 50, h: 50}} text = {['BTCUSD', 'BTC/USD', 'crypto', 'COINBASE']} icon = {{name: "cat-toys", width: 28, height: 28}}/>
                  <DropdownItem type = "symbol-choose" dimensions = {{w: 50, h: 50}} text = {['TSLA', 'TESLA INC', 'stock', 'NASDAQ']} icon = {{name: "cat-mall", width: 28, height: 28}}/>
                  <DropdownItem type = "symbol-choose" dimensions = {{w: 50, h: 50}} text = {['EURUSD', 'EUR/USD', 'forex', 'OANDA']} icon = {{name: "cat-mall", width: 28, height: 28}}/>
                  <DropdownItem type = "symbol-choose" dimensions = {{w: 50, h: 50}} text = {['GOLD', 'GOLD(US$/OZ', 'cfd', 'TVC']} icon = {{name: "cat-mall", width: 28, height: 28}}/>
              </Dropdown>
          </ActionButton>
    )
}