function timerOf(f, ...input){
    console.time('timer')
    const result = f(...input)
    console.timeEnd('timer')
    return result
}

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

function multiply(a,b){
    return a*b
}

console.log(timerOf(factorial,6))
console.log(timerOf(factorial,0))
console.log(timerOf(factorial, -5))

console.log(timerOf(factorial,100),"--------100")
console.log(timerOf(factorial,1000), "--------1000")
console.log(timerOf(factorial,10000),'----------10000')
console.log(timerOf(factorial,100000), '-------100000')
console.log(timerOf(factorial,1000000), '---------1000000')

console.log(timerOf(multiply,2,3))