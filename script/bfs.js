const bfsResult = document.querySelector(".bfsResult");
let bfsArr = [];

function bfsPrint(v){
    const span = document.createElement("span");
    span.innerText = v + " - ";
    bfsResult.appendChild(span);
}

function bfs(s){
    bfsArr.push(s);
    seenVertax.push(s);

    while(bfsArr.length > 0){
        s = bfsArr.shift();
        bfsPrint(s);
        for(let i = 0; i < vertaxCnt; i++){
            const v = document.querySelector(".tr" + s + "td" + i).innerText;
            if(v != `o` && v != `x`){
                if(checkVertax(i)){
                    bfsArr.push(i);
                    seenVertax.push(i);
                }
            }
        }
    }
}

function bfsInit(start){
    while(bfsResult.lastChild != null)
        bfsResult.removeChild(bfsResult.lastChild);

    const span = document.createElement("span");
    span.innerText = "BFS : ";
    bfsResult.appendChild(span);

    seenVertax = [];
    bfs(start);
    
    const end = document.createElement("span");
    end.innerText = "END";
    bfsResult.appendChild(end);
}