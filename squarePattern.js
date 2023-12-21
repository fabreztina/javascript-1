function squarePattern(r,c){
    let array = Array(r+1).fill(0).map(() => Array(c+1).fill(0))
    for(let i = 1; i <= r; i++){
        for(let j = 1; j <= c; j++){
            array[i][j] = '[]'
        }
    }
    let filteredArray = array.slice(1)
    .map(val => val
    .filter((e, i) => i !== 0).join(''))

    return filteredArray.join('\n')

}
console.log(squarePattern(1,1),'1,2')
console.log(squarePattern(2,2),'2,2')
console.log(squarePattern(2,3),'2,3')