let seenVertax = [];
let seenEdge = [];

function checkVertax(v) {
    for(let i = 0; i < seenVertax.length; i++){
        if(seenVertax[i] == v) return false;
    }
    return true;
}

function checkEdge(e) {
    for(let i = 0; i < seenEdge.length; i++){
        if(seenEdge[i] == e) return false;
    }
    return true;
}