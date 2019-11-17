function kruskalInit(){
    const weight = [];
    
    for(let r = 0; r < vertexCnt; r++){
        for(let c = 0; c < r; c++){
            const w = document.querySelector(".tr" + r + "td" + c).innerText;
            if(w != `o` && w != `x`){
                weight.push({
                    w : parseInt(w),
                    s : r,
                    e : c
                });
            }
        }
    }
    weight.sort(function(a, b) {
        return a.w - b.w;
    });

    while(weight.length > 0){
        if(mstCnt === vertexCnt - 1) return;
        mstAddEdge(weight.shift());
    }
}