let primTreeVertex = [];
let primSeenWeight = [];

function primCheck(v){
    for(let i = 0; i < primTreeVertex.length; i++){
        if(primTreeVertex[i] === v) return false;
    }
    return true;
}

function primInit(s){
    primTreeVertex = [];
    primSeenWeight = [];

    do{
        if(mstCnt === vertexCnt - 1) return;
        for(let c = 0; c < s; c++){
            if(!primCheck(c)) continue;
            const w = document.querySelector(".tr" + s + "td" + c).innerText;
            if(w != `o` && w != `x`){
                primSeenWeight.push({
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
                primSeenWeight.push({
                    w : parseInt(w),
                    s : s,
                    e : r
                });
            }
        }
        primSeenWeight.sort(function(a, b) {
            return a.w - b.w;
        });
        primTreeVertex.push(s);
        s = primSeenWeight[0].e;
        mstAddEdge(primSeenWeight.shift());
    }while(primSeenWeight.length > 0) 
}