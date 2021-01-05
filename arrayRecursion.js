function arrayValue(expectedLength,initialValue){
    if(initialValue===expectedLength){
        initialValue=parseInt(prompt("enter value:"));
        return [initialValue];
    }
    if(initialValue<expectedLength){
        initialValue=parseInt(prompt("enter value:"));
        return [initialValue].concat(arrayValue(expectedLength,initialValue+1));
    }  
}
console.log(arrayValue(5,1));