function hexagonPattern(n){
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
    for(let i = n; i >= n - 2; i--){
        let count = n 
        for(let j = 1; j <= length; j++){
            if(count > 0){
                str += '* '
                count--
            }
        }
        str += '\n'
    }
    for(let i = 0; i < n; i++){
        let count = n - i
        temp = i + 2
        for(let j = 0; j < length; j++){
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
    console.log(str)
}
hexagonPattern(5)