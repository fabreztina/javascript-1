const numbers = [34,56,34,76,12,88]

const output = numbers.reduce((maximumvalue, currentvalue) => {
    if(maximumvalue < currentvalue){
        maximumvalue = currentvalue
    }
    return maximumvalue
},0)

console.log(output);