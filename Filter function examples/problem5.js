function fizzbuzz(n){
    let result = [], count = 0
    for(let i = 1; i <= n; i++){
       let value = ((i % 3 === 0) && (i % 5 === 0)) ? "FizzBuzz" : (i % 3 === 0) ? "Fizz" : (i % 5 === 0) ? "Buzz" : i
       result.push(value)
    }
    result.filter(value => {
        if(value === 'Fizz'){
            count++;
        }
    })
    return count
}
console.log(fizzbuzz(20))