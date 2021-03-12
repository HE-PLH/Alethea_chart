import React from "react";

function XAxisLeftSpaceContainer(props) {

    const style = {
        width: props.dimensions.w+"px",
        height: props.dimensions.h+"px",
    };

    return (
        <td style={style} id="x-axis-left-space-scale-container">

        </td>
    )
}

export default XAxisLeftSpaceContainer;