function middlePattern(n){
    let str = ''
    const length = n+(n-1)
    let startValue = Math.floor(length/2)
    
    for(let i = 1; i <= n; i++){
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
        str += '\n'
    }
    console.log(str)
}
middlePattern(7)














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
