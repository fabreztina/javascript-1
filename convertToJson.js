function convertToJson(value, count) {
    let tab = '\t'.repeat(count);

     if (Array.isArray(value)) {
        let array = value.map(val => convertToJson(val, count + 1));
        return `\n${tab}[\n${tab} ${array.join(`,\n${tab}`)} \n${tab}]`;
    } 
    else if (typeof(value) === 'object' && value !== null) {
        const array = Object.entries(value)
            .filter(([key, val]) => val !== undefined)
            .map(([key, val]) => `\t"${key}": ${convertToJson(val, count + 1)}`);
        return `\t{\n${tab} ${array.join(`,\n${tab}`)} \n${tab}}`;
    } 
    else if(typeof(value) === 'undefined'){
        return `\tnull`
    }
    else if (typeof value === 'number' || value === null) {
        return `\t${value}`;
    } 
    else {
        return `\t"${value}"`;
    }
} 

const input = 
[{
    id: 1,
    name: [{ a: 'str1', b: 23, c: null, d: undefined }, ['str1', 'str2', ['str1', ['str1', 44, {c: 'c', d: [1,2]}]]], [1, 3, 4], null, undefined, 23, [32, 54, 76]],
    age: 21,
    undefined: undefined,
    address: function aaa() {
        console.log('Hello')
    },
    null: null
}];


function displayJson(){
    let str = convertToJson(input, 0)
    const jsonOutput = document.getElementById('outputjson');
    jsonOutput.innerHTML =  str;
}