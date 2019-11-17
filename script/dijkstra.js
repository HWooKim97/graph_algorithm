function djikstraInit(s) {
    for(let r = 0; r < vertexCnt; r++){
        for(let c = 0; c < r; c++){
            const w = document.querySelector(".tr" + r + "td" + c).innerText;
            if(w != `o` && w != `x`){
                if(parseInt(w) < 0){
                    window.alert("(" + r + ", " + c + ")'s weight negative number!\nI can't be sure of this result");
                }
            }
        }
    }
    
    let djikstraWeight = [];
    let start = s;
    visitedVertex.push(s);

    for(let i = 0; i < vertexCnt; i++){
        djikstraWeight[i] = Number.MAX_VALUE;
    }

    while(visitedVertex.length !== vertexCnt){
        for(let c = 0; c < s; c++){
            const w = document.querySelector(".tr" + s + "td" + c).innerText;
            if(w != `o` && w != `x` && checkVertex(c)){
                if(djikstraWeight[c] === Number.MAX_VALUE){
                    djikstraWeight[c] = parseInt(w);
                }
                else if(djikstraWeight[c] > (parseInt(w) + djikstraWeight[s])){
                    djikstraWeight[c] = parseInt(w) + djikstraWeight[s];
                }
            }
        }
        for(let r = s + 1; r < vertexCnt; r++){
            const w = document.querySelector(".tr" + r + "td" + s).innerText;
            if(w != `o` && w != `x` && checkVertex(r)){
                if(djikstraWeight[r] === Number.MAX_VALUE){
                    djikstraWeight[r] = parseInt(w);
                }
                else if(djikstraWeight[r] > (parseInt(w) + djikstraWeight[s])){
                    djikstraWeight[r] = parseInt(w) + djikstraWeight[s];
                }
            }
        }
        s = findMinWeight(djikstraWeight);
        if(djikstraWeight[s] === Number.MAX_VALUE) break;
        visitedVertex.push(s);
    }

    djikstraWeight[start] = 0;
    spPrint(start, djikstraWeight);
}