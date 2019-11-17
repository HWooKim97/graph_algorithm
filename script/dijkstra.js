let djikstraWeight = [];

function findMinWeight(arr){
    let min = 0;
    for(let i = 1; i < arr.length; i++){
        if(!checkVertex(i)) continue;
        if(arr[min] > arr[i]) min = i;
    }

    return min;
}

function djikstraInit(s) {
    let start = s;

    djikstraWeight = [];
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
        visitedVertex.push(s);
    }

    djikstraWeight[start] = 0;
    spPrint(start, djikstraWeight);
}