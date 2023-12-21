function boxPattern(value, r,c){
    let count = value.length
    let array = Array(2*r + 3).fill(0).map(() => Array(2*c + 3).fill(0))
    for(let i = 1; i <= 2*r + 1; i++){
        for(let j = 1; j <= 2*c +1; j++){
            if(i%2 !== 0){
                if(j%2 === 0){
                    array[i][j] = '--'
                }
                else{
                    array[i][j] = ' '
                }
            }
            else{
                if(j%2 === 0){
                    array[i][j] = `${value[count-1] || ' '}`
                    count -- 
                }
                else{
                    array[i][j] = '| '
                }
            }
        }
    }
    let filteredArray = array.slice(1)
    .map(val => val
    .filter((e, i) => e !== 0).join(' '))
    return filteredArray.join('\n')
}

function pascalTriangle(n){
    let str = ''
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
        str += boxPattern(value, 1, value.length)
    })
    return str

}
console.log(pascalTriangle(5))