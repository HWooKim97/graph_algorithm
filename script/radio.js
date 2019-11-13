const radioNode = document.querySelector(".node");
const radioUndirect = document.querySelector(".undirected");
const radioDirect = document.querySelector(".directed");

let checkRadio = 1;

function handleGraphRadioClick(){
    if(this.value === `1`) checkRadio = 1;
    else if(this.value === `2`) checkRadio = 2;
    else if(this.value === `3`) checkRadio = 3;

}

function handleCanvasClick(event){
    if(checkRadio === 1) makeNode(event);
}

function radioInit(){
    radioNode.onclick = handleGraphRadioClick;
    radioUndirect.onclick = handleGraphRadioClick;
    radioDirect.onclick = handleGraphRadioClick;

    graphCanvas.onclick = handleCanvasClick;
}