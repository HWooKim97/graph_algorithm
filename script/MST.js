let weightSum;
let mstCnt = 0;

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

function mstAddEdge(edge){
    if(mstCnt === vertexCnt - 1) return;
    if(checkCycle(edge)){
        mstCnt++;
        mstPrint(edge);
        drawAgain(edge);
        weightSum += edge.w;

        if(!checkVertex(edge.s) && checkVertex(edge.e)){ //s가 이미 있는 경우
            visitedVertex.push(edge.e);
            cycleGroup[checkGroup(edge.s)].push(edge.e);
        }
        else if(checkVertex(edge.s) && !checkVertex(edge.e)){ //e가 이미 있는 경우
            visitedVertex.push(edge.s);
            cycleGroup[checkGroup(edge.e)].push(edge.s);
        }
        else if(!checkVertex(edge.s) && !checkVertex(edge.e)){ //둘 다 이미 있지만 그룹이 다른 경우
            concatGroup(edge);
        }
        else{
            visitedVertex.push(edge.s);
            visitedVertex.push(edge.e);
            cycleGroup[cycleCnt].push(edge.s);
            cycleGroup[cycleCnt++].push(edge.e);
            cycleGroup[cycleCnt] = [];
        }
    }
}

function mstInit(n, s){
    graphCTX.clearRect(0, 0, graphCanvas.width, graphCanvas.height);
    
    visitedVertex = [];
    visitedEdge = [];
    cycleGroup = [];
    cycleGroup[0] = [];
    cycleCnt = 0;
    weightSum = 0;
    mstCnt = 0;

    if(n == 1) kruskalInit();
    else if(n == 2) primInit(s);
    else if(n == 3) sollinInit(s);

    const div = document.createElement("div");
    div.innerText = "Sum of Weight : " + weightSum;
    weightResult.appendChild(div);
}