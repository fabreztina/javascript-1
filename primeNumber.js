function primeNumbers(n){
    for (let i = 2; i <= n; i++){
        let flag = false;
        for (let j = 2; j <= (i - 1); j++){
            if (i % j === 0){
                flag = true
            }
        }
        if (!flag){
            console.log(i)
        }
    }

}
primeNumbers(100)