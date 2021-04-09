// function stack(string){
//     let array=[];
//     for(let i=0;i<string.length;i++){
//         array.push(string[i]);
//     }
//     // console.log(array);
//     let reverse="";
//     while(array.length>0){
//        reverse += array.pop();
//     }
//     return reverse;
// }
// console.log(stack('Hello Preethi'))

function Stack(){
    // let stack=[]
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.push('d');
    stack.push('e');
    console.log(stack);
    stack.pop();
    stack.pop();
    console.log(stack);
    stack.push('y');
    console.log(stack);
    stack.pop()
    console.log(stack);
}
newStack()

const stringStack = createStack("First String");
stringStack.insert("n");
console.log(stringStack.eject()); //n
console.log(stringStack.eject()); //g
console.log(stringStack.eject()); //n
console.log(stringStack.eject()); //i







const stringStack = createStack();
console.log(stringStack.push("a"));
console.log(stringStack.push("ab"));
console.log(stringStack.push("c"));
console.log(stringStack.peek()); //c
console.log(stringStack.pop()); //c
console.log(stringStack.size()); //2
console.log(stringStack.isEmpty()); //false
console.log(stringStack.pop()); //ab
console.log(stringStack.pop()); //a
console.log(stringStack.isEmpty()); //true



function createStack() {
    let values = [];
    let insert = function(value) {
        return values.push(value);
    }
    let del =function () {
        return values.pop();
    }
    let peek = function() {
        return values[values.length-1];
    }
    let size = function() {
        return values.length;
    }
    let isEmpty = function() {
        if(values.length === 0){
            return true;
        }
        return false;
    }
    return {push: insert, delete: del, peek, size, isEmpty};
}
let stringStack = createStack();
console.log(stringStack.push("a"));
console.log(stringStack.push("ab"));
console.log(stringStack.push("c"));
console.log(stringStack.peek()); 
console.log(stringStack. delete()); 
console.log(stringStack.size());
console.log(stringStack.isEmpty());
console.log(stringStack.delete()); 
console.log(stringStack.delete());
console.log(stringStack.isEmpty());

