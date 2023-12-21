function countElementsInArrayofArrays(input){
    return input.flat(Infinity).reduce((acc,cur) => {
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    }, {})
}
const input = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
  ];
console.log(countElementsInArrayofArrays(input))