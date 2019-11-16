const nodeCreateRadio = document.querySelector(".nodeCreateRadio");
const nodeDeleteRadio = document.querySelector(".nodeDeleteRadio");
const edgeCreateRadio = document.querySelector(".edgeCreateRadio");
const edgeDeleteRadio = document.querySelector(".edgeDeleteRadio");

let nodeCreate = true;
let edgeCreate = true;

function handleEdgeRadio(event){
    if(this.value == 1) edgeCreate = true;
    else if(this.value == 2) edgeCreate = false;
}

function handleNodeRadio(event){
    if(this.value == 1) nodeCreate = true;
    else if(this.value == 2) nodeCreate = false;
}

function radioInit(){
    nodeCreateRadio.onclick = handleNodeRadio;
    nodeDeleteRadio.onclick = handleNodeRadio;
    edgeCreateRadio.onclick = handleEdgeRadio;
    edgeDeleteRadio.onclick = handleEdgeRadio;
}