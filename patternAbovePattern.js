function patternAbovePattern(n, k){
    if(k <= 0){
        return ''
    }
    let str = ''
    const length = n+(n-1)

    for(let i = n; i > 0; i--){
        let count = n - i + 1 
        let temp = i + 2
        for(let j = 1; j <= length; j++){
            if(count > 0){
                if(j === i){
                    str += '*'
                    count--
                }
                else if(j === temp){
                    str += '*'
                    count--
                    temp += 2
                }
                else{
                    str += ' '
                }
            }
            else{
                str += ' '
            }
        }
        str += '\n'
    }
    k--
    return str += patternAbovePattern(n, k)
}
console.log(patternAbovePattern(8,3))