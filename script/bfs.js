const bfsResult = document.querySelector(".bfsResult");
let bfsArr = [];

function bfsPrint(v){
    const span = document.createElement("span");
    span.innerText = v + " - ";
    bfsResult.appendChild(span);
}

function bfs(s){
    bfsArr.push(s);
    visitedVertex.push(s);

    while(bfsArr.length > 0){
        s = bfsArr.shift();
        bfsPrint(s);
        for(let i = 0; i < vertexCnt; i++){
            const v = document.querySelector(".tr" + s + "td" + i).innerText;
            if(v != `o` && v != `x`){
                if(checkVertex(i)){
                    bfsArr.push(i);
                    visitedVertex.push(i);
                }
            }
        }
    }
}

function bfsInit(start){
    while(bfsResult.lastChild != null)
        bfsResult.removeChild(bfsResult.lastChild);

    const span = document.createElement("span");
    span.innerText = "Start - ";
    bfsResult.appendChild(span);
    visitedVertex = [];
    bfs(start);
    
    const end = document.createElement("span");
    end.innerText = "END";
    bfsResult.appendChild(end);
}