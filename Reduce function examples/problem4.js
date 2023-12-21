const words = ['Hello', 'Good', 'Morning']

const output = words.reduce((acc, cur) => {
      return  acc = acc + ' ' + cur
}, '')

console.log(output);