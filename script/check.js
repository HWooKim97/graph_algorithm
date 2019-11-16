let seenVertex = [];
let seenEdge = [];

function checkVertex(v) {
    for(let i = 0; i < seenVertex.length; i++){
        if(seenVertex[i] == v) return false;
    }
    return true;
}

function checkEdge(e) {
    for(let i = 0; i < seenEdge.length; i++){
        if(seenEdge[i] == e) return false;
    }
    return true;
}