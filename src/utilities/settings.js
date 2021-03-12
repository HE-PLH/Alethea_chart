import {Methods} from "./methods";

export let settings = {
    canvas: {
        main: {
            dimensions:{w: 800,h: 466},
            background: "transparent"
        },
        topView: {
            dimensions:{w: 800,h: 466},
            background: "transparent"
        },
        main_canvas_back_view: {
            dimensions:{w: 800,h: 466},
            background: "transparent"
        },
        priceCanvasMain: {
            dimensions:{w: 70,h: 466},
            background: "transparent"
        },
        priceCanvasTopView: {
            dimensions:{w: 70,h: 466},
            background: "transparent"
        },
        time_canvas_main: {
            dimensions:{w: 800,h: 30},
            background: "transparent"
        },
        time_canvas_top_view: {
            dimensions:{w: 800,h: 30},
            background: "transparent"
        }

    },
    initial: {
        left: 0,
        right: 1,
    },
    default : {
        timeScale : {
            rightOffset:30,
            display: false,
            barSpacing: 1,
            timeDisplay: true,
            secondDisplay: false,
            timeDivider: "D",
        },
        candleStick : {
            increaseColor: '#26a69a',
            decreaseColor: '#ef5350',
            wickColor: '#737375',
            wickIncreaseColor: '#26a69a',
            wickDecreaseColor: '#ef5350',
            wickDisplay: 'true',
            borderDisplay: 'true',
            borderColor: '#378658',
            borderIncreaseColor: '#26a69a',
            borderDecreaseColor: '#ef5350',
            barWidth: 5,
            borderWidth: 1
            /*increaseColor: 'green',
            decreaseColor: 'red',
            wickColor: '#737375',
            wickIncreaseColor: 'green',
            wickDecreaseColor: 'red',
            wickDisplay: 'true',
            borderDisplay: 'true',
            borderColor: 'green',
            borderIncreaseColor: 'green',
            borderDecreaseColor: 'red',
            barWidth: 10,
            borderWidth: 1,
            top_offset: 40*/
        },
        barGraph : {
            lineWidth: 3,
            ticks: 1,
        },
        yScale : {
            top_offset: 0,
            initial_top_offset: 50,
            yTopLimit: 0,
            yBottomLimit: 400,
            initial_bottom_offset: 0,
        },
        chart: {
        // type: 'lineGraph',
        // type: 'areaGraph',
        type: 'candleStick',
        // type: 'barGraph',
    },
    }
};


export let customSettings = Methods.getObjectCopy(settings.default);

export let userCoefficient = {
    zoomIn: 5,
    zoomOut: 5,
    scrollLeft: customSettings.timeScale.barSpacing+customSettings.candleStick.barWidth||5,
    scrollRight: customSettings.timeScale.barSpacing+customSettings.candleStick.barWidth||5,
};