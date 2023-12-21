const fruits = ['apple', 'orange', 'banana','fig', 'grapes','guava']

const output = fruits.filter(fruit => {
    if(fruit.length > 5){
        return fruit
    }
})

console.log(output);