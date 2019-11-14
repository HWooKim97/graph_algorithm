const dataTable = document.querySelector(".dataTable");
const topTr = document.querySelector("tr");

let nodeCnt = 0;
const li = [];

function makeNodeDataStruct(){
    const tr = document.createElement("tr");
    tr.classList.add("tr" + nodeCnt);

    const topTd = document.createElement("td");
    topTd.innerText = nodeCnt;
    topTr.appendChild(topTd);

    if(nodeCnt > 0){
        for(let i = 0; i < nodeCnt; i++){
            const preTd = document.querySelector(".tr" + i);
            const td = document.createElement("td");
            td.classList.add("tr" + i + "td" + nodeCnt);
            td.innerText = "x";
            preTd.appendChild(td);
        }
    }

    const leftTd = document.createElement("td");
    leftTd.innerText = nodeCnt;
    tr.appendChild(leftTd);

    for(let i = 0; i <= nodeCnt; i++){
        const td = document.createElement("td");
        td.classList.add("tr" + nodeCnt + "td" + i);
        td.innerText = "x";
        if(i === nodeCnt) td.innerText = 0;
        tr.appendChild(td);
    }

    dataTable.appendChild(tr);
}

function makeNodeButton(x, y){
    const btn = document.createElement("button");
    btn.innerText = nodeCnt;
    btn.value = nodeCnt;
    btn.classList.add("btnNode");
    btn.style.left = x + `px`;
    btn.style.top = y + 120 + `px`;
    btn.onclick = handleNodeClick;

    canvasZone.appendChild(btn);
}

function handleCanvasClick(event){
    let x = event.offsetX;
    let y = event.offsetY;
    let w = graphCanvas.width;
    let h = graphCanvas.height;

    if(x >= 25 && y >= 25 && x <= w - 20 && y <= h - 20){
        makeNodeButton(x, y);
        makeNodeDataStruct();
        nodeCnt++;
    }
}

function nodeInit(){
    graphCanvas.onclick = handleCanvasClick;
}