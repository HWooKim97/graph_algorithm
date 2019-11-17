function bellmanInit(s) {
    let neg = false;
    for(let r = 0; r < vertexCnt; r++){
        for(let c = 0; c < r; c++){
            const w = document.querySelector(".tr" + r + "td" + c).innerText;
            if(w != `o` && w != `x`){
                if(parseInt(w) < 0){
                    window.alert("There's negative cycle!\nI can't be sure of this result...");
                    neg = true;
                    break;
                }
            }
        }
        if(neg === true) break;
    }

    let bellmanWeight = [];
    let start = s;

    for(let i = 0; i < vertexCnt; i++){
        bellmanWeight[i] = Number.MAX_VALUE;
    }

    for(let i = 0; i < vertexCnt - 1; i++){
        for(let c = 0; c < s; c++){
            const w = document.querySelector(".tr" + s + "td" + c).innerText;
            if(w != `o` && w != `x`){
                if(bellmanWeight[c] === Number.MAX_VALUE){
                    bellmanWeight[c] = parseInt(w);
                }
                else if(bellmanWeight[c] > (parseInt(w) + bellmanWeight[s])){
                    bellmanWeight[c] = parseInt(w) + bellmanWeight[s];
                }
            }
        }   
        for(let r = s + 1; r < vertexCnt; r++){
            const w = document.querySelector(".tr" + r + "td" + s).innerText;
            if(w != `o` && w != `x`){
                if(bellmanWeight[r] === Number.MAX_VALUE){
                    bellmanWeight[r] = parseInt(w);
                }
                else if(bellmanWeight[r] > (parseInt(w) + bellmanWeight[s])){
                    bellmanWeight[r] = parseInt(w) + bellmanWeight[s];
                }
            }
        }
        s = findMinWeight(bellmanWeight);
        if(bellmanWeight[s] === Number.MAX_VALUE) break;
    }
    
    bellmanWeight[s] = 0;
    spPrint(start, bellmanWeight);
}