// METHOD 3

function middlePattern3(n){
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
    console.log(str)
}

middlePattern3(7)

// METHOD 2

function middlePattern2(n){
    const length = n+(n-1)
    let startValue = Math.floor(length/2)
    
    for(let i = 1; i <= n; i++){
        let str = ''
        let count = i
        let nextValue = startValue + 2
        for(let j = 0; j < length; j++){
            if(count > 0 ){
                if(j === startValue){
                    str += '*'
                    count --
                }
                else if(j === nextValue){
                    str += '*'
                    count --
                    nextValue += 2
                }
                else{
                    str += ' '
                }
            }
            else{
                str += ' '
            }
        }
        startValue--
        console.log(str)
    }
}
middlePattern2(7)
















// function middlePattern(n){
//     for(let i = 1; i <= n; i++){
//         let str = ''
//         for(let j = n; j >= 1; j--){
//             let spaceCount = j - i
//             if(spaceCount > 0){
//                 str += ' '
//             }
//             else{
//                 str += '* '
//             }
//         }
//         console.log(str.slice(0, str.length-1))
//     }
// }

// middlePattern(10)
