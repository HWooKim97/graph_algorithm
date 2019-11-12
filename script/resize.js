let delta = 300;
let timer = null;

function resizeDone(){
    setDefaultCanvas();
}

window.onresize = function(){
    clearTimeout(timer);
    timer = setTimeout(resizeDone, delta);
}