function findMinWeight(arr){
    let min = 0;
    for(let i = 1; i < arr.length; i++){
        if(!checkVertex(i)) continue;
        if(arr[min] > arr[i]) min = i;
    }

    return min;
}

function spPrint(s, weightArr) {
    for(let e = 0; e < weightArr.length; e++){
        const div = document.createElement("div");
        div.innerText = "edge(" + s + "," + e + ")(sp : " + weightArr[e] + ")";
        weightResult.appendChild(div);
    }
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