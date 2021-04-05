import { data } from "../data/sample_data";


export let globals = {
    current_graph : '',
    canvasOffset: {left: 0, top: 0},
    ultimateTotalXScale: {},
    all_coordinates: [],
    main_canvas_view_context: CanvasRenderingContext2D,
    main_canvas_back_view_context: CanvasRenderingContext2D,
    main_canvas_top_view_context: CanvasRenderingContext2D,

    time_canvas_main_view_context: CanvasRenderingContext2D,
    time_canvas_top_view_context: CanvasRenderingContext2D,

    price_canvas_main_view_context: CanvasRenderingContext2D,
    price_canvas_top_view_context: CanvasRenderingContext2D,

    volume_context: CanvasRenderingContext2D,

    
    my_data: data,
    virtual_data: [],
    y_division: 0,
    volume_division: 0,
    yAxisList: [],
    xAxisList: [],
    approximateCandleWidth: 0,
    constant_widths: 100,
    constant_heights: 20,
    operating_right_offset: 0,
    operating_top_offset: 0,
    operating_scale_coordinate_offset: 0,
    scaleWidth: 50,
    highestTop: 0,
    coordinate: {x: 0, y: 0},
    operating_top_limit: 0,
    operating_bottom_limit: 0,
    scale_coordinate_offset: 0,
    xAxisScaleRange: 0,
    pixRatio: 1,
    element: null,


};


export let main_elements = {
    mainRowBody: document.getElementById("main-body"),
    chartBody: document.getElementById("chart-body-container"),
    leftBodyContainer: document.getElementById("left-body-container"),
    mainChartBody: document.getElementById("main-body-chart-container"),
    RightBodyContainer: document.getElementById("right-body-container"),
};