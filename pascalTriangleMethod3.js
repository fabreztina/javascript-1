function printTrianglePattern(arr, n){
    let str = ''
    let characterStartPosition = n
    for(let row = 1; row <= n; row++){
        let nextCharacterPosition = characterStartPosition
        let characterCount = row
        let count = 1
        for(let column = 1; column <= n+(n-1); column++){
            if((column === nextCharacterPosition) && characterCount > 0){
                let temp = arr[row][count]
                str += temp
                characterCount--
                nextCharacterPosition += 2
                count++
            }
            else{
                str += ' '
            }
                
        }
        str += '\n'
        characterStartPosition--
    }
    return str
}

function pascalTriangle(n){
    let characterStartPosition = n
    let pascalTriangleValues = Array(n+1).fill(0).map(() => Array(n+1).fill(0))
    for(let row = 1; row <= n; row++){
        let characterCount = row
        for(let column = 1; column <= n+(n-1); column++){
            if(characterCount > 0){
                if(row === 1 && column === 1){
                    pascalTriangleValues[row][column] = 1
                    characterCount--
                }
                else{
                    pascalTriangleValues[row][column] = pascalTriangleValues[row-1][column-1] + pascalTriangleValues[row-1][column]
                    characterCount --
                }
            }
        }
        characterStartPosition--
    }

    //Filter 0th row and 0th column in 2D array

    // let filteredArray = pascalTriangleValues.slice(1)
    // .map(val => val
    // .filter((e, i) => i !== 0))
    // console.log(filteredArray, 'file')
    
    return printTrianglePattern(pascalTriangleValues, n)
}
console.log(pascalTriangle(5))

// number = number * (row - count) / (count)