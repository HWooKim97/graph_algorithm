const vertexCreateRadio = document.querySelector(".vertexCreateRadio");
const vertexDeleteRadio = document.querySelector(".vertexDeleteRadio");
const edgeCreateRadio = document.querySelector(".edgeCreateRadio");
const edgeDeleteRadio = document.querySelector(".edgeDeleteRadio");

let vertexCreate = true;
let edgeCreate = true;

function handleEdgeRadio(event){
    if(this.value == 1) edgeCreate = true;
    else if(this.value == 2) edgeCreate = false;
}

function handleVertexRadio(event){
    if(this.value == 1) vertexCreate = true;
    else if(this.value == 2) vertexCreate = false;
}

function radioInit(){
    vertexCreateRadio.onclick = handleVertexRadio;
    vertexDeleteRadio.onclick = handleVertexRadio;
    edgeCreateRadio.onclick = handleEdgeRadio;
    edgeDeleteRadio.onclick = handleEdgeRadio;
}