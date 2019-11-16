let treeVertex = [];
let seenWeight = [];

function primCheck(v){
    for(let i = 0; i < treeVertex.length; i++){
        if(treeVertex[i] === v) return false;
    }
    return true;
}

function primInit(s){
    treeVertex = [];
    seenWeight = [];

    do{
        for(let r = s + 1; r < vertexCnt; r++){
            if(!primCheck(r)) continue;
            const w = document.querySelector(".tr" + r + "td" + s).innerText;
            if(w != `o` && w != `x`){
                seenWeight.push({
                    w : parseInt(w),
                    s : s,
                    e : r
                });
            }
        }
        for(let c = 0; c < s; c++){
            if(!primCheck(c)) continue;
            const w = document.querySelector(".tr" + s + "td" + c).innerText;
            if(w != `o` && w != `x`){
                seenWeight.push({
                    w : parseInt(w),
                    s : s,
                    e : c
                });
            }
        }
        seenWeight.sort(function(a, b) {
            return a.w - b.w;
        });
        treeVertex.push(s);
        s = seenWeight[0].e;
        mstAddEdge(seenWeight.shift());
    }while(seenWeight.length > 0) 
}