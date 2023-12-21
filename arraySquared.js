function arraySquared(arr){
    let result = []
    arr.map((number) => {
        result.push(number * number)
    })
    return result
}
console.log(arraySquared([1,2,3,4,5]))