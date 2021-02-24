import React, {useEffect, useRef} from 'react'

const MainChartCanvas = props => {
    const chartMainCanvasRef = useRef(null);

    const draw =(ctx)=>{
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(50, 100, 20, 0, 2*Math.PI);
        ctx.fill();
    };

    useEffect(()=>{
        const canvas = chartMainCanvasRef.current;
        const ctx = canvas.getContext("2d");
        draw(ctx);
    }, [draw]);

    return(
        <canvas ref = {chartMainCanvasRef} {...props}/>
    )
};

export default MainChartCanvas