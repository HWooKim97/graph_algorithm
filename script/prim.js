let primTreeVertex = [];
let primSeenEdge = [];

function primCheck(v){
    for(let i = 0; i < primTreeVertex.length; i++){
        if(primTreeVertex[i] === v) return false;
    }
    return true;
}

function primInit(s){
    primTreeVertex = [];
    primSeenEdge = [];

    do{
        if(mstCnt === vertexCnt - 1) return;
        for(let c = 0; c < s; c++){
            if(!primCheck(c)) continue;
            const w = document.querySelector(".tr" + s + "td" + c).innerText;
            if(w != `o` && w != `x`){
                primSeenEdge.push({
                    w : parseInt(w),
                    s : s,
                    e : c
                });
            }
        }
        for(let r = s + 1; r < vertexCnt; r++){
            if(!primCheck(r)) continue;
            const w = document.querySelector(".tr" + r + "td" + s).innerText;
            if(w != `o` && w != `x`){
                primSeenEdge.push({
                    w : parseInt(w),
                    s : s,
                    e : r
                });
            }
        }
        if(primSeenEdge.length === 0){
            window.alert("Vertex '" + s + "' don't have Edge!");
            return;
        }
        primSeenEdge.sort((a, b) => a.w - b.w);
        primTreeVertex.push(s);
        s = primSeenEdge[0].e;
        mstAddEdge(primSeenEdge.shift());
    }while(primSeenEdge.length > 0) 
}