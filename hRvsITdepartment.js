function highAverageSalary(input){
    let departmentSalaryInfo = input.reduce((acc, {name, salary, department}) => {
        if(!acc[department]){
            acc[department] = {department: department, totalSalary: 0, count: 0}
        }
        acc[department].totalSalary += salary
        acc[department].count++
        return acc
    },{})

    return Object.values(departmentSalaryInfo).map(v => {
        return {department: v.department, average: Math.floor(v.totalSalary/v.count)}
    })
    .filter(v => v.average > 65000)
}
const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
]
console.log(highAverageSalary(employees))