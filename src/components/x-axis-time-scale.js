import React from "react";
import XAxisLeftSpaceContainer from "./x-axis-left-space-container";
import XAxisMainContainer from "./x-scale-container";
import XAxisRightSpaceContainer from "./x-axis-right-space-container";

function XAxisTimeScaleContainer(props) {
    return (
        <tr id="x-axis-scale-super-container" style={{height: props.height}}>
            <XAxisLeftSpaceContainer dimensions = {{w: props.leftWidth, h: props.height}} />
            <XAxisMainContainer drawXScale={props.drawXScale} dimensions={{w: props.mainWidth, h: props.height}} />
            <XAxisRightSpaceContainer dimensions = {{w: props.rightWidth, h: props.height}}/>
        </tr>
    )
}

export default XAxisTimeScaleContainer;