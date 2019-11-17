let sollinEdge = [];

function sollinConcat(t, s){
    for(let i = 0; i < sollinEdge[t].length; i++){
        if(checkEdge(sollinEdge[t][i]) !== true){
            sollinEdge[t].splice(i, 1);
        }
    }
    for(let i = 0; i < sollinEdge[s].length; i++){
        if(checkEdge(sollinEdge[s][i]) !== true){
            sollinEdge[s].splice(i, 1);
        }
    }
    for(let i = 0; i < sollinEdge[t].length; i++){
        for(let j = 0; j < sollinEdge[s].length; j++){
            if(sollinEdge[t][i] === sollinEdge[s][j]){
                sollinEdge[s].splice(j, 1);
            }
        }
    }

    sollinEdge[t] = sollinEdge[t].concat(sollinEdge[s]);
    sollinEdge.splice(s, 1);

    sollinEdge[t].sort((a, b) => a.w - b.w);
}

function sollinInit(){
    sollinEdge = [];

    for(let s = 0; s < vertexCnt; s++){
        sollinEdge[s] = [];
        for(let c = 0; c < s; c++){
            const w = document.querySelector(".tr" + s + "td" + c).innerText;
            if(w != `o` && w != `x`){
                sollinEdge[s].push({
                    w : parseInt(w),
                    s : c,
                    e : s
                });
            }
        }
        for(let r = s + 1; r < vertexCnt; r++){
            const w = document.querySelector(".tr" + r + "td" + s).innerText;
            if(w != `o` && w != `x`){
                sollinEdge[s].push({
                    w : parseInt(w),
                    s : s,
                    e : r
                });
            }
        }
        sollinEdge[s].sort((a, b) => a.w - b.w);
    }

    while(mstCnt !== vertexCnt - 1){
        for(let s = 0; s < vertexCnt; s++){
            if(mstCnt === vertexCnt - 1) return;
            if(sollinEdge[s] == null) continue;
            if(sollinEdge[s].length == 0){
                sollinEdge.splice(s, 1);
                continue;
            }
            let tmp = sollinEdge[s].shift();
            if(checkEdge(tmp) === true){
                visitedEdge.push(tmp);
                mstAddEdge(tmp);
            }
            else{
                sollinConcat(checkEdge(tmp), s);
            }
        }
        sollinEdge.sort((a,b) => a[1] - b[1]);
    }
}