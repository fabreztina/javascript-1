function sumOfPositiveNumbers(arr){
    return arr.filter(value => value >= 0)
    .reduce((acc,cur) => acc + cur, 0)
}
console.log(sumOfPositiveNumbers([1, -4, 12, 0, -3, 29, -150, 5]))
console.log(sumOfPositiveNumbers([-1,-55,-9,-3]))
