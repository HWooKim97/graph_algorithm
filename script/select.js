const select = document.querySelector(".select");

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
}