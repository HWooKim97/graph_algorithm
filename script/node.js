const dataStructZone = document.querySelector(".dataStructZone");
const nodeDataStruct = [];
const nodeButton = [];
let nodeCount = 0;

function makeNodeDataStruct(){
    nodeDataStruct[nodeCount] = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = nodeCount + ` - `;
    nodeDataStruct[nodeCount].appendChild(span);
    dataStructZone.appendChild(nodeDataStruct[nodeCount]);
}

function makeNodeButton(x, y){
    nodeButton[nodeCount] = document.createElement("button");
    nodeButton[nodeCount].innerText = nodeCount;
    nodeButton[nodeCount].classList.add(nodeCount);
    nodeButton[nodeCount].classList.add("btnNode");
    nodeButton[nodeCount].onclick = handleNodeClick;
    nodeButton[nodeCount].style.left = x + `px`;
    nodeButton[nodeCount].style.top = y + 120 + `px`;

    canvasZone.appendChild(nodeButton[nodeCount]);
    nodeCount++;
}

function makeNode(event){
    let x = event.offsetX;
    let y = event.offsetY;
    let w = graphCanvas.width;
    let h = graphCanvas.height;

    if(x >= 25 && y >= 25 && x <= w - 20 && y <= h - 20){
        makeNodeButton(x, y);
        makeNodeDataStruct();
    }
}