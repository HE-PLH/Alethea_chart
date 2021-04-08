import React, { useState } from "react";
import { ChartInfoContext, VirtualDataContext, DataChangedContext } from "./contexts";


export function ChartInfoContextProvider(props) {
    const [record, setRecord] = useState({});

    return (
        <ChartInfoContext.Provider value={{ record, setRecord }}>
            {props.children}
        </ChartInfoContext.Provider>
    );
}

export function VirtualDataContextProvider(props) {
    const [virtual_data, setVirtualData] = useState([]);

    return (
        <VirtualDataContext.Provider value={{ virtual_data, setVirtualData }}>
            {props.children}
        </VirtualDataContext.Provider>
    );
}

export function DataChangedContextProvider(props) {
    const [dataChanged, setDatachanged] = useState(1);

    return (
        <DataChangedContext.Provider value={{ dataChanged, setDatachanged }}>
            {props.children}
        </DataChangedContext.Provider>
    );
}
