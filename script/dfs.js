const dfsResult = document.querySelector(".dfsResult");
let dfsArr = [];

function dfsPrint(v){
    const span = document.createElement("span");
    span.innerText = v + " - ";
    dfsResult.appendChild(span);
}

function dfs(s){
    dfsArr.push(s);
    seenVertax.push(s);

    for(let i = 0; i < vertaxCnt; i++){
        const v = document.querySelector(".tr" + s + "td" + i).innerText;
        if(v != `o` && v != `x`){
            if(checkVertax(i)) dfs(i);
        }
    }
    dfsPrint(dfsArr.shift());
}

function dfsInit(start){
    while(dfsResult.lastChild != null)
        dfsResult.removeChild(dfsResult.lastChild);

    const span = document.createElement("span");
    span.innerText = "DFS : ";
    dfsResult.appendChild(span);

    seenVertax = [];
    dfs(start);

    const end = document.createElement("span");
    end.innerText = "END";
    dfsResult.appendChild(end);
}