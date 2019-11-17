let sollinWeight = [];
let selectedWeight = [];

function sollinConcat(a, b){
    for(let i = 0; i < sollinWeight[a].length; i++){
        if(sollinCheck(sollinWeight[a][i]) !== true){
            sollinWeight[a].splice(i, 1);
        }
    }
    for(let i = 0; i < sollinWeight[b].length; i++){
        if(sollinCheck(sollinWeight[b][i]) !== true){
            sollinWeight[b].splice(i, 1);
        }
    }
    for(let i = 0; i < sollinWeight[a].length; i++){
        for(let j = 0; j < sollinWeight[b].length; j++){
            if(sollinWeight[a][i] === sollinWeight[b][j]){
                sollinWeight[b].splice(j, 1);
            }
        }
    }

    sollinWeight[a] = sollinWeight[a].concat(sollinWeight[b]);
}

function sollinCheck(edge){
    for(let i = 0; i < selectedWeight.length; i++){
        if(selectedWeight[i].s == edge.s && selectedWeight[i].e == edge.e)
            return i;
    }
    return true;
}

function sollinInit(){
    sollinWeight = [];
    selectedWeight = [];

    for(let s = 0; s < vertexCnt; s++){
        sollinWeight[s] = [];
        for(let c = 0; c < s; c++){
            const w = document.querySelector(".tr" + s + "td" + c).innerText;
            if(w != `o` && w != `x`){
                sollinWeight[s].push({
                    w : parseInt(w),
                    s : c,
                    e : s
                });
            }
        }
        for(let r = s + 1; r < vertexCnt; r++){
            const w = document.querySelector(".tr" + r + "td" + s).innerText;
            if(w != `o` && w != `x`){
                sollinWeight[s].push({
                    w : parseInt(w),
                    s : s,
                    e : r
                });
            }
        }
        sollinWeight[s].sort(function(a, b) {
            return a.w - b.w;
        });
    }

    while(mstCnt !== vertexCnt - 1){
        for(let s = 0; s < vertexCnt; s++){
            if(mstCnt === vertexCnt - 1) return;
            if(sollinWeight[s].length == 0) continue;
            let tmp = sollinWeight[s].shift();
            if(sollinCheck(tmp) === true){
                selectedWeight.push(tmp);
                mstAddEdge(tmp);
            }
            else{
                sollinConcat(sollinCheck(tmp), s);
            }
        }
    }
}