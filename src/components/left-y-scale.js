import React from "react";
import MainYScaleCanvas from "./canvasComponents/main-y-scale-canvas";

export default function LeftYScale(props) {
    const style = {
        width: props.dimensions.w
    };

    return (
        <td id = "left-y-price-scale-axis-super-container" style={style} className = "y-scale">
            <MainYScaleCanvas className = "y-canvas" {...props} />
        </td>
    )
}