const select = document.querySelector(".select");
const weightResult = document.querySelector(".weightResult");
const leftStartInput = document.querySelector(".leftStartInput");
const rightStartInput = document.querySelector(".rightStartInput");
const startBtn = document.querySelector(".startBtn");
const inputDiv = document.querySelector(".inputDiv");
const btnDiv = document.querySelector(".btnDiv");

let selection = 0;

function handleStartBtn(event){
    event.preventDefault();
    if(selection == 1 || selection == 3) mstInit(selection);
    else floydInit();
}

function handleRightStartInput(event){
    if(event.keyCode === 13){
        event.preventDefault();
        const startVertex = parseInt(this.value);

        if(startVertex >= 0 && startVertex < vertexCnt){
            if(selection == 2) mstInit(selection, startVertex);
            else spInit(selection, startVertex);
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
    selection = select.options[select.selectedIndex].value;

    weightResult.classList.remove("hiding");
    weightResult.classList.add("showing");
    
    if(selection == 1 || selection == 3 || selection == 6){
        inputDiv.classList.remove("showing");
        inputDiv.classList.add("hiding");
        btnDiv.classList.remove("hiding");
        btnDiv.classList.add("showing");
    }
    else if(selection > 1 && selection < 6){
        btnDiv.classList.remove("showing");
        btnDiv.classList.add("hiding");    
        inputDiv.classList.remove("hiding");
        inputDiv.classList.add("showing");
    }
    else{
        selection = 0;
        weightResult.classList.remove("showing");
        weightResult.classList.add("hiding");
        inputDiv.classList.remove("showing");
        inputDiv.classList.add("hiding");
        btnDiv.classList.remove("showing");
        btnDiv.classList.add("hiding");    
    }
}

function selectInit(){
    select.onchange = handleSelectChange;
    leftStartInput.onkeypress = handleLeftStartInput;
    rightStartInput.onkeypress = handleRightStartInput;
    startBtn.onclick = handleStartBtn;
}