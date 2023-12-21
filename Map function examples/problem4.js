const users = [
    {firstName: "Elon", lastName: "Musk"},
    {firstName: "Bill", lastName: "Gates"},
    {firstName: "Steve", lastName: "Jobs"},
    {firstName: "Albert", lastName: "Einstein"},
    {firstName: "Elin", lastName: "Harper"}
]

const output = users.map(user => user.firstName + ' ' + user.lastName)
console.log(output);