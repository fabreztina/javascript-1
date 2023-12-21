function pascalTriangle(n){
    let str = ''
    let characterStartPosition = n
    let pascalTriangleValues = []
    for(let row = 1; row <= n; row++){
        let nextCharacterPosition = characterStartPosition
        let characterCount = row
        let number = 0
        let rowValue = []
        let count = 0
        for(let column = 1; column <= n+(n-1); column++){
            if((column === nextCharacterPosition) && characterCount > 0){
                if(pascalTriangleValues.length === 0){
                    str += 1
                    rowValue.push(1)
                    nextCharacterPosition += 2
                    characterCount--
                }
                else{
                    let val = pascalTriangleValues[row-2][count] || 0 
                    let temp = number + val
                    str += temp
                    number = val
                    rowValue.push(temp)
                    nextCharacterPosition += 2
                    characterCount--

                    count++
                }
            }
            else{
                str += ' '
            }
        }
        str += '\n'
        pascalTriangleValues.push(rowValue);  
        characterStartPosition--
    }
    return str
}
console.log(pascalTriangle(5))

// number = number * (row - count) / (count)