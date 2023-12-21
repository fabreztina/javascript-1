// let root = document.getElementById('root');
// let inputBox = document.createElement('input')
// inputBox.id = 'inputBox'
// inputBox.setAttribute('type', 'text')
// inputBox.setAttribute('placeholder','0' )
// root.appendChild(inputBox)

// let button1 = document.createElement('button')
// button1.setAttribute('id', 'button1')
// button1.innerText = '1'
// root.appendChild(button1)

let replay = []
function handleKeys(key){
    document.getElementById('inputBox').value += key
}

function handleClear(){
    document.getElementById('inputBox').value = ""
}

function evaluate(num1,num2,operator){
    let finalValue;
    if(operator === '+'){
        finalValue = num1 + num2
    }
    else if(operator === '-'){
        finalValue = num1 - num2
    }
    else if(operator === '*'){
        finalValue = num1 * num2
    }
    else if(operator === '/'){
        finalValue = num1 / num2
    }
    return finalValue
}
function splitInput(){
    let inputBox = document.getElementById('inputBox');
    let inputBoxValue = inputBox.value;
    replay.push(inputBoxValue)

    if (/^log\d+(\.\d+)?$/.test(inputBoxValue)) {
        const numberPart = parseFloat(inputBoxValue.substring(3));
        console.log(numberPart);
        if (!isNaN(numberPart) && numberPart > 0) {
            const result = Math.log2(numberPart);
            replay.push(result);
            inputBox.value = result.toString();
        } else {
            inputBox.value = 'Value should be greater than 0';
        }    
    }
    else{
        let newStr = inputBoxValue.split(/([\+-/\\*])/)
        
        let tempArr = []
        
        let i = 0;
        while(i < newStr.length){
            if(newStr[i] === '*' || newStr[i] === '/'){
                let num1 = Number(tempArr.pop())
                let num2 = Number(newStr[i + 1])
                let operator = newStr[i]
    
                let result = evaluate(num1, num2, operator)
                tempArr.push(result.toString())
                i += 2;
            }
            else{
                let char = newStr[i]
                tempArr.push(char)
                i++
            }
        }
    
        let output = Number(tempArr[0])
        for(let i = 1; i < tempArr.length; i+=2){
            let operator = tempArr[i]
            let num2 = Number(tempArr[i+1])
            output = evaluate(output,num2,operator)
        }
        replay.push(output)
        inputBox.value = output.toString();
    }
    
}

function handleReplay(){
    let replayValue = ''
    for(let i = 0; i < replay.length; i += 2){
        replayValue += `${replay[i]} = ${replay[i + 1]}\n`
    }
    let replayOutput = document.getElementById('replayOutput');
    replayOutput.innerText = replayValue;
}

function handleAllClear(){
    let allclear = document.getElementById('replayOutput')
    replay = []
    allclear.innerText = replay
    document.getElementById('inputBox').value = ""
}
