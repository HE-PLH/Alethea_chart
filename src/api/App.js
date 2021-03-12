import React, {useState, useEffect} from 'react';
import './App.css';
import {lazyEffect} from "../utilities/resize_throttle";
import ChartContainer from '../components/chart-container'
import Home from "../components/Home";

export default function App() {
  return (
    <Home />
  )
}