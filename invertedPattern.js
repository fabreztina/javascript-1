function invertedPattern(n, k){
    if(k <= 0){
        return ''
    }
    let str = ''
    const length = n+(n-1)
    
    for(let i = n; i > 1; i--){
        let count = i
        temp = n - i
        for(let j = 0; j < length; j++){
            if(count > 0){
                if(j === temp){
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
    return str +=  invertedPattern(n, k)
}

console.log(invertedPattern(8, 4))