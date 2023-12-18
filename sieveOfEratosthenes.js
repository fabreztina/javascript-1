function primeNumbers(n){
    let numberArray = Array(n+1).fill(true)
    numberArray[0] = false
    numberArray[1] = false
    for(let i = 2; i <= n; i++){
        if(numberArray[i]){
            for(let j = i*i; j <= n; j+=i){
                numberArray[j] = false
            }
        }
    }
    numberArray.filter((prime, i) => {
        if(prime){
            console.log(i)
        }
    })
}
primeNumbers(100)