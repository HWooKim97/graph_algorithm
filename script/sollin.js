let sollinWeight = [];
let selectedWeight = [];

function sollinConcat(t, s){
    for(let i = 0; i < sollinWeight[t].length; i++){
        if(sollinCheck(sollinWeight[t][i]) !== true){
            sollinWeight[t].splice(i, 1);
        }
    }
    for(let i = 0; i < sollinWeight[s].length; i++){
        if(sollinCheck(sollinWeight[s][i]) !== true){
            sollinWeight[s].splice(i, 1);
        }
    }
    for(let i = 0; i < sollinWeight[t].length; i++){
        for(let j = 0; j < sollinWeight[s].length; j++){
            if(sollinWeight[t][i] === sollinWeight[s][j]){
                sollinWeight[s].splice(j, 1);
            }
        }
    }

    sollinWeight[t] = sollinWeight[t].concat(sollinWeight[s]);
    sollinWeight.splice(s, 1);

    sollinWeight[t].sort((a, b) => a.w - b.w);
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
        sollinWeight[s].sort((a, b) => a.w - b.w);
    }

    while(mstCnt !== vertexCnt - 1){
        for(let s = 0; s < vertexCnt; s++){
            if(mstCnt === vertexCnt - 1) return;
            if(sollinWeight[s] == null) continue;
            if(sollinWeight[s].length == 0){
                sollinWeight.splice(s, 1);
                continue;
            }
            let tmp = sollinWeight[s].shift();
            if(sollinCheck(tmp) === true){
                selectedWeight.push(tmp);
                mstAddEdge(tmp);
            }
            else{
                sollinConcat(sollinCheck(tmp), s);
            }
        }
        sollinWeight.sort((a,b) => a[1] - b[1]);
    }
}