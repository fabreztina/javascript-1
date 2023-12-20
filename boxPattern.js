function boxPattern(r,c){
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
                    array[i][j] = ' '
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
console.log(boxPattern(1,1))
console.log(boxPattern(2,2))
console.log(boxPattern(2,3))