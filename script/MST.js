let weightSum;

function drawAgain(edge) {
    const sBtn = document.querySelector(".vertex" + edge.s);
    const eBtn = document.querySelector(".vertex" + edge.e);

    const sx = parseInt(sBtn.style.left);
    const sy = parseInt(sBtn.style.top) - 120;
    const ex = parseInt(eBtn.style.left);
    const ey = parseInt(eBtn.style.top) - 120;
    
    graphCTX.beginPath();
    graphCTX.moveTo(sx, sy);
    graphCTX.lineTo(ex, ey);
    graphCTX.stroke();
}

function mstPrint(edge) {
    const div = document.createElement("div");
    div.innerText = "edge(" + edge.s + "," + edge.e + ")(weight : " + edge.w + ")";
    weightResult.appendChild(div);
}

function mstInit(n){
    graphCTX.clearRect(0, 0, graphCanvas.width, graphCanvas.height);
    while(weightResult.lastChild != null)
        weightResult.removeChild(weightResult.lastChild);
    
    seenVertex = [];
    cycleGroup = [];
    cycleGroup[0] = [];
    cycleCnt = 0;
    weightSum = 0;

    if(n == 1) kruskalInit();
    else if(n == 2) primInit();
    else if(n == 3) sollinInit();

    const div = document.createElement("div");
    div.innerText = "Sum of Weight : " + weightSum;
    weightResult.appendChild(div);
}