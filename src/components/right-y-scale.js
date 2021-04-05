import React from "react";
import MainYScaleCanvas from "./canvasComponents/main-y-scale-canvas";
import TopViewYScaleCanvas from "./canvasComponents/top-view-y-axis-canvas";

export default function rightYScale(props) {
    const style = {
        width: props.dimensions.w,
    };
    return (
        <td id="y-price-scale-axis-super-container" style={style} className = "y-scale">
            <div id="y-price-scale-axis-container">
                <MainYScaleCanvas {...props}/>
                <TopViewYScaleCanvas {...props}/>
            </div>
        </td>
    )
}