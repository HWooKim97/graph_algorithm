function spPrint(s, e, w) {
    const div = document.createElement("div");
    div.innerText = "edge(" + s + "," + e + ")(sp : " + w + ")";
    weightResult.appendChild(div);
}

function spInit(n, s) {
    visitedVertex = [];
    visitedEdge = [];
    cycleGroup = [];
    cycleGroup[0] = [];
    cycleCnt = 0;
    weightSum = 0;
    mstCnt = 0;
    
    if(n == 4) djikstraInit(s);
    else if(n == 5) bellmanInit(s);
    else if(n == 6) floydInit();
}