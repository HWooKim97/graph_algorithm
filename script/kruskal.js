function kruskalInit(){
    const kruskalEdge = [];
    
    for(let r = 0; r < vertexCnt; r++){
        for(let c = 0; c < r; c++){
            const w = document.querySelector(".tr" + r + "td" + c).innerText;
            if(w != `o` && w != `x`){
                kruskalEdge.push({
                    w : parseInt(w),
                    s : r,
                    e : c
                });
            }
        }
    }
    kruskalEdge.sort((a, b) => a.w - b.w);

    while(kruskalEdge.length > 0){
        if(mstCnt === vertexCnt - 1) return;
        mstAddEdge(kruskalEdge.shift());
    }
}