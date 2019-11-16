const vertaxCreateRadio = document.querySelector(".vertaxCreateRadio");
const vertaxDeleteRadio = document.querySelector(".vertaxDeleteRadio");
const edgeCreateRadio = document.querySelector(".edgeCreateRadio");
const edgeDeleteRadio = document.querySelector(".edgeDeleteRadio");

let vertaxCreate = true;
let edgeCreate = true;

function handleEdgeRadio(event){
    if(this.value == 1) edgeCreate = true;
    else if(this.value == 2) edgeCreate = false;
}

function handleVertaxRadio(event){
    if(this.value == 1) vertaxCreate = true;
    else if(this.value == 2) vertaxCreate = false;
}

function radioInit(){
    vertaxCreateRadio.onclick = handleVertaxRadio;
    vertaxDeleteRadio.onclick = handleVertaxRadio;
    edgeCreateRadio.onclick = handleEdgeRadio;
    edgeDeleteRadio.onclick = handleEdgeRadio;
}