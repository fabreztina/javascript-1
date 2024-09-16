function highPerformingStudents(input){
    return input.map(v => {
        const sum = v.scores.reduce((acc, cur) => acc + cur, 0)
        return {name: v.name, average: sum/v.scores.length}
    })
    .filter(v => v.average > 90)
}
const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "Jack", scores: [100, 100, 100] }
  ];
console.log(highPerformingStudents(students))