import {globals, main_elements} from "./globals";
import {settings} from "./settings";

function getDevicePixRatio(){
    // return window.devicePixelRatio || 1;
	if(window.innerHeight>window.innerWidth){
		return window.innerHeight/window.innerWidth+window.devicePixelRatio;
	}else{
		return (window.innerWidth/window.innerHeight+window.devicePixelRatio)
	}
}
export function Creator (canvas = HTMLCanvasElement) {
    this.canvas = canvas;
    this.createCanvas = (_document = HTMLDocument, parent) => {
        this.canvas = _document.createElement("canvas");
        this.canvas.classList.add("normal_drag");
        parent.appendChild(this.canvas);
        return this;
    };
    this.style = (styling_obj = {dimensions : null, background : null})=>{
        globals.pixRatio = getDevicePixRatio();
        // we should keep the layout size...
        if (styling_obj.dimensions) {
            this.canvas.style.width = `${styling_obj.dimensions.w}px`;
            this.canvas.style.height = `${styling_obj.dimensions.h}px`;
            // ...but multiply coordinate space dimensions to device pixel ratio
            this.canvas.width = Math.floor(styling_obj.dimensions.w * globals.pixRatio);
            this.canvas.height = Math.floor(styling_obj.dimensions.h * globals.pixRatio);
        }
        if (styling_obj.background) {
            this.canvas.style.backgroundColor = styling_obj.background;
        }
        return this.canvas;
    }
}

export function getContext2D(canvas = HTMLCanvasElement){
	const ctx = canvas.getContext('2d');
	ctx.setTransform(1, 0, 0, 1, 1, 1);
	ctx.scale(globals.pixRatio,  globals.pixRatio);
    // ctx.translate(globals.pixRatio,  globals.pixRatio);
	return ctx;
}

const dimensionAdj = (el, w, h)=>{
    el.style.height = `${h}px`;
    el.style.width = `${w}px`;
};

export function adjustDimensions(d){
    dimensionAdj(main_elements.mainRowBody, d.w, d.h-120);
    dimensionAdj(main_elements.leftBodyContainer, 40, d.h-120);
    dimensionAdj(main_elements.mainChartBody, d.w-80, d.h-120);
    dimensionAdj(main_elements.RightBodyContainer, 40, d.h-120);
}