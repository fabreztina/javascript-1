function pyramidNumberPattern(n){
    let str = ''
    const length = n+(n-1)

    for(let i = n; i > 0; i--){
        let count = n - i + 1 
        let temp = i + 2
        for(let j = 1; j <= length; j++){
            if(count > 0){
                if(j === i){
                    str += `${n - i + 1}`
                    count--
                }
                else if(j === temp){
                    str += `${n - i + 1}`
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

pyramidNumberPattern(6)