import React from 'react';
import './App.css';
import Home from "../components/Home";
import {ChartInfoContextProvider, DataChangedContextProvider, VirtualDataContextProvider} from "../contexts/ChartContextProvider";

export default function App() {
  return (
    <DataChangedContextProvider>
    <ChartInfoContextProvider>
      <VirtualDataContextProvider>
        <Home />
      </VirtualDataContextProvider>
    </ChartInfoContextProvider>
    </DataChangedContextProvider>
  )
}