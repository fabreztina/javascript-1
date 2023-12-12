function middlePattern(n){
    let str=""
    for(let i=1;i<=n;i++){
        for(let k=1;k<=(n-i);k++){
            str+=" ";
        }
        for(let j=1;j<=i;j++){
            str+="* ";
        }
        str+="\n";
    }
    console.log(str)
}

middlePattern(7)
