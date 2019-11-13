const graphCanvas = document.querySelector("canvas");
const graphCTX = graphCanvas.getContext("2d");
const canvasZone = graphCanvas.parentElement;

function setDefaultCanvas(){
    graphCanvas.width = parseInt(window.getComputedStyle(canvasZone).width);
    graphCanvas.height = parseInt(window.getComputedStyle(canvasZone).height);
    graphCanvas.style.border = `1px solid black`;
}