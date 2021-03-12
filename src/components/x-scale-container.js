import React from "react";
import MainTimeScaleCanvas from "./MainTimeScaleCanvas";
import TopTimeScaleCanvas from "./timeScaleTopViewCanvas";

function XAxisMainContainer(props) {

    const style = {
        width: props.dimensions.w+"px",
        height: props.dimensions.h+"px",
    };

    return (
        <td style={style}  id="x-axis-scale-container">
            <MainTimeScaleCanvas{...props}/>
            <TopTimeScaleCanvas{...props}/>
        </td>
    )
}

export default XAxisMainContainer;