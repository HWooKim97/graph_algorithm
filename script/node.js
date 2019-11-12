const radioNode = document.querySelector(".node");

const btnNode = [];
let cntNode = 0;

function resizeNode(){
    btnNode.forEach(element => {
        
    });
}

function handleNode(event){
    event.preventDefault();
}

function makeNode(x, y){
    btnNode[cntNode] = document.createElement("button");
    btnNode[cntNode].innerText = cntNode;
    btnNode[cntNode].classList.add(cntNode);
    btnNode[cntNode].classList.add("btnNode");
    btnNode[cntNode].onclick = handleNode;
    btnNode[cntNode].style.left = x + `px`;
    btnNode[cntNode].style.top = y + 120 + `px`;

    canvasZone.appendChild(btnNode[cntNode]);
    cntNode++;
}

function handleCanvasClick(event){
    let x = event.offsetX;
    let y = event.offsetY;
    let w = graphCanvas.width;
    let h = graphCanvas.height;

    if(x >= 20 && y >= 20 && x <= w - 20 && y <= h - 20)
        makeNode(x, y);
}

graphCanvas.onclick = handleCanvasClick;