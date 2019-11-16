const dataTable = document.querySelector(".dataTable");
const topTr = document.querySelector("tr");

let vertexCnt = 0;
const li = [];

function makeVertexDataStruct(){
    const tr = document.createElement("tr");
    tr.classList.add("tr" + vertexCnt);

    const topTd = document.createElement("td");
    topTd.innerText = vertexCnt;
    topTr.appendChild(topTd);

    if(vertexCnt > 0){
        for(let i = 0; i < vertexCnt; i++){
            const preTd = document.querySelector(".tr" + i);
            const td = document.createElement("td");
            td.classList.add("tr" + i + "td" + vertexCnt);
            td.innerText = "x";
            preTd.appendChild(td);
        }
    }

    const leftTd = document.createElement("td");
    leftTd.innerText = vertexCnt;
    tr.appendChild(leftTd);

    for(let i = 0; i <= vertexCnt; i++){
        const td = document.createElement("td");
        td.classList.add("tr" + vertexCnt + "td" + i);
        td.innerText = "x";
        if(i === vertexCnt) td.innerText = "o";
        tr.appendChild(td);
    }

    dataTable.appendChild(tr);
}

function makeVertexButton(x, y){
    const btn = document.createElement("button");
    btn.innerText = vertexCnt;
    btn.value = vertexCnt;
    btn.classList.add("btnVertex");
    btn.classList.add("vertex" + vertexCnt);
    btn.style.left = x + `px`;
    btn.style.top = y + 120 + `px`;
    btn.onclick = handleVertexClick;

    canvasZone.appendChild(btn);
}

function handleCanvasClick(event){
    let x = event.offsetX;
    let y = event.offsetY;
    let w = graphCanvas.width;
    let h = graphCanvas.height;

    if(x >= 25 && y >= 25 && x <= w - 20 && y <= h - 20){
        makeVertexButton(x, y);
        makeVertexDataStruct();
        vertexCnt++;
    }
}

function vertexInit(){
    graphCanvas.onclick = handleCanvasClick;
}