import React from "react";

function XAxisRightSpaceContainer(props) {

    const style = {
        width: props.dimensions.w+"px",
        height: props.dimensions.h+"px",
    };
    return (
        <td style={style} id="x-axis-right-space-scale-container">

        </td>
    )
}

export default XAxisRightSpaceContainer;