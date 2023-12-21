function sumOfPositiveNumbers(arr){
    return arr.reduce((acc,cur) => {
        if(cur >= 0){
            acc += cur
        }
        return acc
    }, 0)
}
console.log(sumOfPositiveNumbers([1, -4, 12, 0, -3, 29, -150]))
console.log(sumOfPositiveNumbers([-1,-55,-9,-3]))