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

function permutation(n, r){
    if(n < 0n || r < 0n){
        return
    }
    return factorial(n)/ factorial(n-r)  // n!/(n - r)!
}

function combination(n,r){
    if(n < 0n || r < 0n){
        return
    }
    return factorial(n) / (factorial(r) * factorial(n-r))   // n!/((n-r)! r!)
}

console.log(permutation(3,2), ' permutation')
console.log(permutation(100000,98), ' permutation')
console.log(permutation(0,0), ' permutation')
console.log(permutation(5,5), ' permutation')

console.log('--------------------------------------------')

console.log(combination(3,2), ' combination')
console.log(combination(100000,98), ' combination')
console.log(combination(0,0), ' combination')
console.log(combination(5,5), ' combination')
