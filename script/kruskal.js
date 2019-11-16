function kruskal(weight){
    let result = [];
    let resultCnt = 0;

    while(weight.length > 0){
        let edge = weight.shift();
        if(checkCycle(edge) === true){
            mstPrint(edge);
            drawAgain(edge);
            weightSum += edge.w;
            result[resultCnt++] = {
                s : edge.s,
                e : edge.e
            }

            if(!checkVertex(edge.s) && checkVertex(edge.e)){ //s가 이미 있는 경우
                seenVertex.push(edge.e);
                cycleGroup[checkGroup(edge.s)].push(edge.e);
            }
            else if(checkVertex(edge.s) && !checkVertex(edge.e)){ //e가 이미 있는 경우
                seenVertex.push(edge.s);
                cycleGroup[checkGroup(edge.e)].push(edge.s);
            }
            else if(!checkVertex(edge.s) && !checkVertex(edge.e)){ //둘 다 이미 있지만 그룹이 다른 경우
                console.log("do concat")
                concatGroup(edge);
            }
            else{
                seenVertex.push(edge.s);
                seenVertex.push(edge.e);
                cycleGroup[cycleCnt].push(edge.s);
                cycleGroup[cycleCnt++].push(edge.e);
                cycleGroup[cycleCnt] = [];
            }
        }
    }
}

function kruskalInit(){
    const weight = [];
    
    for(let r = 0; r < vertexCnt; r++){
        for(let c = 0; c < r; c++){
            const w = document.querySelector(".tr" + r + "td" + c).innerText;
            if(w != `o` && w != `x`){
                weight.push({
                    w : parseInt(w),
                    s : r,
                    e : c
                });
            }
        }
    }

    weight.sort(function(a, b) {
        return a.w - b.w;
    });

    kruskal(weight);
}