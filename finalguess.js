function randomInt(min,max)
{
    var result=min+Math.floor((max-min)*Math.random());
    return result;
}
randomInt(1,11)
function isCorrectGuess(userChoice){
    return {isWinner:userChoice==randomInt(1,11),luckyNumber:randomInt(1,11)};
}
function isvalidInput(input){
    return input>=1 && input<=10;
}
function guessGame(){
    var userName=prompt("enter your name:");
    console.log(userName);
    var userChoice=prompt("choose a number between 1 and 10:");
    if(!isvalidInput(userChoice)){
        alert("failed");
    }
    else{
        const guessResult=isCorrectGuess(userChoice);
        if(guessResult.isWinner){
            alert(`congradulations ${userName}`);
        }
        else{
            alert(`the number should be ${guessResult.luckyNumber}. better luck next time ${userName}`);
            
        }
    }
}
guessGame();