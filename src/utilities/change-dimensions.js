import {settings} from "./settings";
import {globals} from "./globals"

export function dimensionsMaster(fullDimensions) {
    globals.dimensions_Master = {
        topNavMajor: settings.topNavMajor.height,
        chooseTab: settings.chooseTab.height,
        bottomTab: settings.bottomTab.height,
        chartWidget: {
            w: 0,
            h: 0
        },
        leftSidebar: {
            w: settings.leftSidebar.width,
            h: 0
        },
        leftAxis:{
            w: settings.canvas.priceCanvasMain.dimensions.w * settings.initial.left,
            h: 0,
        },
        rightAxis:{
            w: settings.canvas.priceCanvasMain.dimensions.w * settings.initial.right,
            h: 0,
        },
        bottomAxis:{
            w: 0,
            h: settings.canvas.time_canvas_main.dimensions.h,
        },
        rightSidebar: {
            w: settings.rightSidebar.width,
            h: 0
        },
        canvasDimensions: {
            w: 0,
            h: 0,
        },
        chartBody: {
            w: 0,
            h: 0
        },
        tableWidget: {
            w: 0,
            h: 0
        }
    };

    globals.dimensions_Master.chartWidget = {
        w: fullDimensions.w,
        h: fullDimensions.h - globals.dimensions_Master.topNavMajor - globals.dimensions_Master.chooseTab-globals.dimensions_Master.bottomTab
    };

    globals.dimensions_Master.tableWidget = {
        w: globals.dimensions_Master.chartWidget.w - globals.dimensions_Master.leftSidebar.w - globals.dimensions_Master.rightSidebar.w,
        h: globals.dimensions_Master.chartWidget.h
    };
    globals.dimensions_Master.leftSidebar.h = globals.dimensions_Master.rightSidebar.h = globals.dimensions_Master.leftAxis.h = globals.dimensions_Master.rightAxis.h = globals.dimensions_Master.chartWidget.h;
    globals.dimensions_Master.canvasDimensions = {
        w: globals.dimensions_Master.tableWidget.w-globals.dimensions_Master.leftAxis.w-globals.dimensions_Master.rightAxis.w,
        h: globals.dimensions_Master.chartWidget.h-globals.dimensions_Master.bottomAxis.h
    };
    globals.dimensions_Master.chartBody = {
        w: globals.dimensions_Master.canvasDimensions.w,
        h: globals.dimensions_Master.chartWidget.h
    };
    globals.dimensions_Master.bottomAxis.w = globals.dimensions_Master.tableWidget.w;

    globals.canvasOffset = {
        left: globals.dimensions_Master.leftSidebar.w+globals.dimensions_Master.leftAxis.w,
        top: globals.dimensions_Master.topNavMajor+globals.dimensions_Master.chooseTab
    };
    return globals.dimensions_Master;
}