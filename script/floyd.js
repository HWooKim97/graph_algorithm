function floydInit(){
    let neg = false;
    for(let r = 0; r < vertexCnt; r++){
        for(let c = 0; c < r; c++){
            const w = document.querySelector(".tr" + r + "td" + c).innerText;
            if(w != `o` && w != `x`){
                if(parseInt(w) < 0){
                    window.alert("There're negative cycle!\nI can't be sure of this result...");
                    neg = true;
                    break;
                }
            }
        }
        if(neg === true) break;
    }

    let floydArr = [];
    let negativeArr = {
        w : [],
        r : [],
        c : []
    };
    for(let r = 0; r < vertexCnt; r++){
        floydArr[r] = [];
        floydArr[r][r] = 0;
        for(let c = 0; c < r; c++){
            const w = document.querySelector(".tr" + r + "td" + c).innerText;
            if(w != `o` && w != `x`){
                floydArr[r][c] = parseInt(w);
                floydArr[c][r] = parseInt(w);
                if(parseInt(w) < 0){
                    floydArr[r][c] = 0;
                    floydArr[c][r] = 0;
                    negativeArr.w.push(parseInt(w));
                    negativeArr.r.push(r);
                    negativeArr.c.push(c);
                }
            }
            else if(w == `x`){
                floydArr[r][c] = Number.MAX_VALUE;
                floydArr[c][r] = Number.MAX_VALUE;
            }
            else{
                floydArr[r][c] = 0;
                floydArr[c][r] = 0;
            }
        }
    }
    for(let i = 0; i < vertexCnt; i++){
        for(let r = 0; r < vertexCnt; r++){
            for(let c = 0; c < vertexCnt; c++){
                if(floydArr[r][c] > (floydArr[r][i] + floydArr[i][c])){
                    floydArr[r][c] = floydArr[r][i] + floydArr[i][c];
                }
            }
        }
    }
    
    while(negativeArr.w.length > 0){
        let r = negativeArr.r.shift();
        let c = negativeArr.c.shift();
        let w = negativeArr.w.shift();
        floydArr[r][c] += w;
        floydArr[c][r] += w;
    }

    for(let r = 0; r < vertexCnt; r++){
        for(let c = 0; c < vertexCnt; c++){
            const div = document.createElement("div");
            div.innerText = "edge(" + r + "," + c + ")(sp : " + floydArr[r][c] + ")";
            weightResult.appendChild(div);
        }
        if(r === vertexCnt - 1) break;
        const tmp = document.createElement("div");
        tmp.innerText = "-----";
        weightResult.appendChild(tmp);
    }
}