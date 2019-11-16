const dfsResult = document.querySelector(".dfsResult");
let dfsArr = [];

function dfsPrint(v){
    const span = document.createElement("span");
    span.innerText = v + " - ";
    dfsResult.appendChild(span);
}

function dfs(s){
    dfsArr.push(s);
    seenVertex.push(s);

    for(let i = 0; i < vertexCnt; i++){
        const v = document.querySelector(".tr" + s + "td" + i).innerText;
        if(v != `o` && v != `x`){
            if(checkVertex(i)) dfs(i);
        }
    }
    dfsPrint(dfsArr.shift());
}

function dfsInit(start){
    while(dfsResult.lastChild != null)
        dfsResult.removeChild(dfsResult.lastChild);

    const span = document.createElement("span");
    span.innerText = "Start - ";
    dfsResult.appendChild(span);
    seenVertex = [];
    dfs(start);

    const end = document.createElement("span");
    end.innerText = "END";
    dfsResult.appendChild(end);
}