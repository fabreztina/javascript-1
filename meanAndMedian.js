function findMean(arr){
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}
function findMedian(arr){
    let temp = arr.slice().sort((a,b) => a - b)
    let midValue = Math.floor(arr.length/2)
    return arr.length%2 === 0 ? findMean([temp[midValue - 1], temp[midValue]]) : temp[midValue]
}
function printMeanAndMedian(arr){
    return {mean: findMean(arr), median: findMedian(arr)}
}
console.log(printMeanAndMedian([12, 46, 32, 64]))