const dataTable = document.querySelector(".dataTable");
const topTr = document.querySelector("tr");

let vertaxCnt = 0;
const li = [];

function makeVertaxDataStruct(){
    const tr = document.createElement("tr");
    tr.classList.add("tr" + vertaxCnt);

    const topTd = document.createElement("td");
    topTd.innerText = vertaxCnt;
    topTr.appendChild(topTd);

    if(vertaxCnt > 0){
        for(let i = 0; i < vertaxCnt; i++){
            const preTd = document.querySelector(".tr" + i);
            const td = document.createElement("td");
            td.classList.add("tr" + i + "td" + vertaxCnt);
            td.innerText = "x";
            preTd.appendChild(td);
        }
    }

    const leftTd = document.createElement("td");
    leftTd.innerText = vertaxCnt;
    tr.appendChild(leftTd);

    for(let i = 0; i <= vertaxCnt; i++){
        const td = document.createElement("td");
        td.classList.add("tr" + vertaxCnt + "td" + i);
        td.innerText = "x";
        if(i === vertaxCnt) td.innerText = 0;
        tr.appendChild(td);
    }

    dataTable.appendChild(tr);
}

function makeVertaxButton(x, y){
    const btn = document.createElement("button");
    btn.innerText = vertaxCnt;
    btn.value = vertaxCnt;
    btn.classList.add("btnVertax");
    btn.style.left = x + `px`;
    btn.style.top = y + 120 + `px`;
    btn.onclick = handleVertaxClick;

    canvasZone.appendChild(btn);
}

function handleCanvasClick(event){
    let x = event.offsetX;
    let y = event.offsetY;
    let w = graphCanvas.width;
    let h = graphCanvas.height;

    if(x >= 25 && y >= 25 && x <= w - 20 && y <= h - 20){
        makeVertaxButton(x, y);
        makeVertaxDataStruct();
        vertaxCnt++;
    }
}

function vertaxInit(){
    graphCanvas.onclick = handleCanvasClick;
}