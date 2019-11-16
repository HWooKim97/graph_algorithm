const select = document.querySelector(".select");
const weightResult = document.querySelector(".weightResult");
const startInput = document.querySelector(".startInput");


function handleStartInput(event){
    if(event.keyCode === 13){
        event.preventDefault();
        const startVertax = parseInt(this.value);

        if(startVertax >= 0 && startVertax < vertaxCnt){
            bfsInit(startVertax);
            dfsInit(startVertax);
        }
        else window.alert("Start Vertax Number Error!");
    }
}

function handleSelectChange(){
    let selectValue = select.options[select.selectedIndex].value;

    if(selectValue == 1){
    }
    else if(selectValue == 2){
    }
    else if(selectValue == 3){
    }
    else if(selectValue == 4){
    }
    else if(selectValue == 5){
    }
    else if(selectValue == 6){
    }
    else if(selectValue == 7){
    }
    else{
    }
}

function selectInit(){
    select.onchange = handleSelectChange;
    startInput.onkeypress = handleStartInput;
}