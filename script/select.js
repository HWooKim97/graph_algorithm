const select = document.querySelector(".select");
const weightResult = document.querySelector(".weightResult");
const leftStartInput = document.querySelector(".leftStartInput");
const rightStartInput = document.querySelector(".rightStartInput");
const startBtn = document.querySelector(".startBtn");
const inputDiv = document.querySelector(".inputDiv");
const btnDiv = document.querySelector(".btnDiv");

let selection = 0;
const ALGORITHMS = [ null,
    kruskalInit, primInit, sollinInit,
    djikstraInit, bellmanInit, floydInit
]

function handleStartBtn(event){

}

function handleRightStartInput(event){
    if(event.keyCode === 13){
        event.preventDefault();
        const startVertex = parseInt(this.value);

        if(startVertex >= 0 && startVertex < vertexCnt){
            if(selection > 0 && selection < 6)
                ALGORITHMS[selection](startVertex);
            else if(selection == 6) ALGORITHMS[selection]();
        }
        else window.alert("Start Vertex Number Error!");
    }
}

function handleLeftStartInput(event){
    if(event.keyCode === 13){
        event.preventDefault();
        const startVertex = parseInt(this.value);

        if(startVertex >= 0 && startVertex < vertexCnt){
            bfsInit(startVertex);
            dfsInit(startVertex);
        }
        else window.alert("Start Vertex Number Error!");
    }
}

function handleSelectChange(){
    let selectValue = select.options[select.selectedIndex].value;

    weightResult.classList.remove("hiding");
    weightResult.classList.add("showing");
    inputDiv.classList.remove("hiding");
    inputDiv.classList.add("showing");
    btnDiv.classList.remove("showing");
    btnDiv.classList.add("hiding");

    if(selectValue == 1) selection = 1;
    else if(selectValue == 2) selection = 2;
    else if(selectValue == 3) selection = 3;
    else if(selectValue == 4) selection = 4;
    else if(selectValue == 5) selection = 5;
    else if(selectValue == 6){
        inputDiv.classList.remove("showing");
        inputDiv.classList.add("hiding");
        btnDiv.classList.remove("hiding");
        btnDiv.classList.add("showing");
        selection = 6;
    }
    else{
        selection = 0;
        weightResult.classList.remove("showing");
        weightResult.classList.add("hiding");
    }
}

function selectInit(){
    select.onchange = handleSelectChange;
    leftStartInput.onkeypress = handleLeftStartInput;
    rightStartInput.onkeypress = handleRightStartInput;
    startBtn.onclick = handleStartBtn;
}