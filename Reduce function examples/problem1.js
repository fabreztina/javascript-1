const numbers = [1,3,8,3,5,6]

const sum = numbers.reduce((initialvalue, currentvalue) => {
        initialvalue = initialvalue + currentvalue
        return initialvalue
}, 0)

console.log(sum);