const dataStructZone = document.querySelector(".dataStructZone");
const node = {
    datastruct : [],
    button : [],
    cnt : 0
};
const NEXT = 0;
const WEIGHT = 1;

function makeNodeDataStruct(){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = node.cnt + ` - `;
    li.appendChild(span);
    dataStructZone.appendChild(li);

    node.datastruct[node.cnt] = [2];
    node.datastruct[node.cnt][NEXT] = null;
    node.datastruct[node.cnt][WEIGHT] = 0;
}

function makeNodeButton(x, y){
    node.button[node.cnt] = document.createElement("button");
    node.button[node.cnt].innerText = node.cnt;
    node.button[node.cnt].value = node.cnt;
    node.button[node.cnt].classList.add("btnNode");
    node.button[node.cnt].style.left = x + `px`;
    node.button[node.cnt].style.top = y + 120 + `px`;
    node.button[node.cnt].onclick = handleNodeClick;

    canvasZone.appendChild(node.button[node.cnt]);
}

function handleCanvasClick(event){
    let x = event.offsetX;
    let y = event.offsetY;
    let w = graphCanvas.width;
    let h = graphCanvas.height;

    if(x >= 25 && y >= 25 && x <= w - 20 && y <= h - 20){
        makeNodeButton(x, y);
        makeNodeDataStruct();
        node.cnt++;
    }
}

function nodeInit(){
    graphCanvas.onclick = handleCanvasClick;
}