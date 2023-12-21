function factorial(n){
    if(n < 0n){
        return
    }
    let result = 1n
    for(let i = 2n; i<=n; i++){
        result *= i
    }
    return result
}

function combination(n,r){
    if(n < 0n || r < 0n){
        return
    }

    return factorial(n) / (factorial(r) * factorial(n-r))   // n!/((n-r)! r!)
}

function pascalTriangle(n){
    let str = ''
    let characterStartPosition = n
    for(let row = 1; row <= n; row++){
        let nextCharacterPosition = characterStartPosition
        let characterCount = row
        let count = 0
        for(let column = 1; column <= n+(n-1); column++){
            if(column === characterStartPosition || column === nextCharacterPosition && characterCount > 0){
                let a = row - 1, b = count
                str += combination(a,b)
                nextCharacterPosition += 2
                characterCount--
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
console.log(pascalTriangle(6))