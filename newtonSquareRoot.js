function newtonSquareRoot(givenNumber){

    let guessValue = 1 ;
    for(let difference = 1 ; difference > 0.0001 ;){
        guessValue = ((givenNumber/guessValue)+guessValue)/2;
        difference = guessValue*guessValue-givenNumber;
    }
    return guessValue;
}
console.log(newtonSquareRoot(3))