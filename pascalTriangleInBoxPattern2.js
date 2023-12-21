function createCell(options, value){
    let top = options.skipTop ? '' : ` -- `
    let left = options.skipLeft ? '' : '|'
    let s =  `${top}@${left} ${value} |@ -- `
    return s.split('@')
}

function createRow(values, previousRowLength){
    let arr = []
    let str = ''
    let count = previousRowLength
    for(let i = 0; i < values.length; i++){
        if(count === 0 && i === 0){
            arr.push(createCell({skipTop: false,skipLeft: false}, values[i]))
            count--
        }
        else if(count > 0 && i === 0){
            arr.push(createCell({skipTop: true, skipLeft: false}, values[i]))
            count --
        }
        else if(count > 0 && i !== 0){
            arr.push(createCell({skipTop: true, skipLeft: true}, values[i]))
            count--
        }
        else{
            arr.push(createCell({skipTop: false, skipLeft: true}, values[i]))
        }
    }

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < arr.length; j++){
            str += arr[j][i]
        }
        if(i !== 2){
            str += '\n'
        }
    }
    return str
}
function createGrid(arr){
    let str = ''
    let previousRowLength = 0
    for(let i = 0; i < arr.length; i++){
        str += createRow(arr[i], previousRowLength)
        previousRowLength = arr[i].length
    }
    return str
}

function pascalTriangle(n){
    let array = []
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
    let filteredArray = pascalTriangleValues.slice(1)
    .map(val => val
    .filter((e, i) => i !== 0))
    filteredArray.map((v,i) => {
        let value = v.slice(0,i+1)
        array.push(value)
    })
    return createGrid(array)
}
console.log(pascalTriangle(5))