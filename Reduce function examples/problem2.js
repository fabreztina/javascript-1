const users = [
    {fName: "a", lName: "b", age: 12},
    {fName: "c", lName: "d", age: 26},
    {fName: "e", lName: "f", age: 32},
    {fName: "g", lName: "h", age: 26},
    {fName: "x", lName: "y", age: 42}
]

let output = users.reduce((user, cur) => {
    if(cur.age === 26){
        user.push(cur.fName)
    }
    return user
}, [])

console.log(output);