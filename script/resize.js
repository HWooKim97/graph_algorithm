let delta = 300;
let timer = null;

const graphRadio = document.querySelector(".graphRadio");

function resizeDone(){
    location.reload();
    // while(canvasZone.lastChild != graphCanvas)
    //     canvasZone.removeChild(canvasZone.lastChild);

    // setDefaultCanvas();
}

window.onresize = function(){
    clearTimeout(timer);
    timer = setTimeout(resizeDone, delta);
}