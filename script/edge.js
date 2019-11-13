//undirect 무방향
//direct 방향

const weightZone = document.querySelector(".weightZone");

let check = false;
let start, end;

function drawEdge(){

}

function handleNodeClick(event){
    event.preventDefault();
    if(check === false){
        start = this;
        check = true;
    }
    else{
        end = this;
        drawEdge();
        check = false;
    }
}
