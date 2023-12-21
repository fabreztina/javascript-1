function ageDifference(arr){
    let ageArray = arr.map(v => v.age).sort((a,b) => a-b)
    const youngest = ageArray[0]
    const oldest = ageArray[ageArray.length - 1]
    return [youngest, oldest, oldest - youngest]
}

const input = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
];
console.log(ageDifference(input))