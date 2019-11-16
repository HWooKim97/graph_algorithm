//undirect 무방향
//direct 방향
const edge = {
    start : [],
    end : [],
    cnt : 0
};

let checkClick = false;
let start, end;
let upper, lower = [];
let lowerCnt = 0;

function handleWeightInput(event){
    if(event.keyCode === 13){
        event.preventDefault();
        lower[this.classList].innerText = parseInt(this.value);
    }
}

function makeEdgeDataStruct(){
    const sv = start.value;
    const ev = end.value;

    upper = document.querySelector(".tr" + sv + "td" + ev);
    lower[lowerCnt] = document.querySelector(".tr" + ev + "td" + sv);

    const weightInput = document.createElement("input");
    weightInput.type = "number";
    weightInput.value = 0;
    weightInput.style.width = `100%`;
    weightInput.classList.add(lowerCnt);
    weightInput.onkeypress = handleWeightInput;
    upper.innerText = ``;
    upper.appendChild(weightInput);
    lower[lowerCnt++].innerText = 0;
}

function drawEdge(){
    const sx = parseInt(start.style.left);
    const sy = parseInt(start.style.top) - 120;
    const ex = parseInt(end.style.left);
    const ey = parseInt(end.style.top) - 120;
    
    graphCTX.beginPath();
    graphCTX.moveTo(sx, sy);
    graphCTX.lineTo(ex, ey);
    graphCTX.stroke();
}

function checkEdge(s, e){
    for(let i = 0; i < edge.cnt; i++){
        if(s === edge.start[i] && e === edge.end[i])
            return false;
    }
    return true;
}

function deleteVertax(btn){
    console.log(btn);
}

function handleVertaxClick(event){
    event.preventDefault();
    // if(vertaxCreate === false){
    //     deleteVertax(this);
    // }
    // else if(edgeCreate === true){
        if(checkClick === false){
            start = this;
            checkClick = true;
        }
        else if(this !== start){
            end = this;
            if(start.value > end.value) [start, end] = [end, start];

            if(checkEdge(start, end)){
                edge.start[edge.cnt] = start;
                edge.end[edge.cnt] = end;
                drawEdge();
                makeEdgeDataStruct();
                edge.cnt++;
                checkClick = false;
            }
        }
}
