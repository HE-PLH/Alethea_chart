import React from "react";
import MainTimeScaleCanvas from "./canvasComponents/MainTimeScaleCanvas";
import TopTimeScaleCanvas from "./canvasComponents/timeScaleTopViewCanvas";

function XAxisMainContainer(props) {

    const style = {
        width: props.dimensions.w+"px",
        height: props.dimensions.h+"px",
    };

    return (
        <td style={style}  id="x-axis-scale-container">
            <MainTimeScaleCanvas {...props}/>
            <TopTimeScaleCanvas {...props}/>
        </td>
    )
}

export default XAxisMainContainer;