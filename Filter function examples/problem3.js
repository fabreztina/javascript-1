const users = [
    {firstName: "Elon", lastName: "Musk", age: 50},
    {firstName: "Bill", lastName: "Gates", age: 70},
    {firstName: "Steve", lastName: "Jobs", age: 80},
    {firstName: "Albert", lastName: "Einstein", age: 90},
    {firstName: "Elin", lastName: "Harper", age: 30}
]

const ageGreaterThan50 = users.filter(user => {
    if(user.age > 50){
        return user
    }
}).map(user => user.firstName + ' ' + user.lastName)
console.log(ageGreaterThan50);