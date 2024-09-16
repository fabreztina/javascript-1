function factorialWithMapAndReduce(n){
    if(typeof n === 'number'){
        return Array.from({length: n})
        .map((v,i) => i + 1)
        .reduce((acc,cur) => acc * cur, 1)
    }
}
console.log(factorialWithMapAndReduce(6))