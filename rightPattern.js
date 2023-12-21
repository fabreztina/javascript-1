function rightPattern(n){
    for(let i = 1; i <= n; i++){
        let str = ''
        for(let j = n; j >= 1; j--){
            let spaceCount = j - i
            if(spaceCount > 0){
                str += ' '
            }
            else{
                str += '*'
            }
        }
        console.log(str)
    }
}
console.log(rightPattern(5))
