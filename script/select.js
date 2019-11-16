const select = document.querySelector(".select");
const weightResult = document.querySelector(".weightResult");
const startInput = document.querySelector(".startInput");

let selection = 0;
const ALGORITHMS = [
    kruskalInit, primInit, sollinInit,
    djikstraInit, bellmanInit, floydInit
]


function handleStartInput(event){
    if(event.keyCode === 13){
        event.preventDefault();
        const startVertex = parseInt(this.value);

        if(startVertex >= 0 && startVertex < vertexCnt){
            bfsInit(startVertex);
            dfsInit(startVertex);
            if(selection > 0 && selection < 6)
                ALGORITHMS[selection](startVertex);
            else if(selection == 6) ALGORITHMS[selection]();
        }
        else window.alert("Start Vertex Number Error!");
    }
}

function handleSelectChange(){
    let selectValue = select.options[select.selectedIndex].value;

    weightResult.classList.remove("hiding");
    weightResult.classList.add("showing");

    if(selectValue == 1) selection = 1;
    else if(selectValue == 2) selection = 2;
    else if(selectValue == 3) selection = 3;
    else if(selectValue == 4) selection = 4;
    else if(selectValue == 5) selection = 5;
    else if(selectValue == 6) selection = 6;
    else{
        weightResult.classList.remove("showing");
        weightResult.classList.add("hiding");
    }
}

function selectInit(){
    select.onchange = handleSelectChange;
    startInput.onkeypress = handleStartInput;
}