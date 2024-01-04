function generateDeckOfCards(){
    const numbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
    const designs = ['D','H','S','C']
    let deckOfCards = []

    for(let i = 0; i < designs.length; i++){
        for(let j = 0; j < numbers.length; j++){
            deckOfCards.push(`${numbers[j]}-${designs[i]}`)
        }
    }
    return deckOfCards
}

function groupCardsByValue(){
    const deckOfCards = generateDeckOfCards()
    let splitNumbersAndDesign = deckOfCards.join('-').split('-')
    let groupCards = {}
    // change logic
    for (let i = 0; i < splitNumbersAndDesign.length; i += 2) {
        let key = splitNumbersAndDesign[i]
        let design = splitNumbersAndDesign[i + 1]
        let card = `${design}-${key}`

        if (!groupCards[key]) {
            groupCards[key] = [card]
        } else {
            groupCards[key].push(card)
        }
    }
    return Object.values(groupCards)
    //
}

function chooseRandomPair(arrangedCards, pairCount){
    let pairs = []
    while (pairCount > 0) {
        let pickRandomPair = arrangedCards[Math.floor(Math.random() * arrangedCards.length)]
        if (pickRandomPair.length > 1) {
            // change logic (use splice)
            let pickedPair = pickRandomPair.slice(0, 2)
            pairs.push(pickedPair)
            arrangedCards = arrangedCards.map(subArray => subArray.filter(card => !pickedPair.includes(card)))
            //
            pairCount -= 2
        }
    }
    return pairs.flat(Infinity)
}

function shuffleCards(arrangedCards, pairCount){
    let pairs = chooseRandomPair(arrangedCards, pairCount)
    let currentIndex = pairs.length, randomIndex

    while(currentIndex > 0){
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        [pairs[currentIndex], pairs[randomIndex]] = [pairs[randomIndex], pairs[currentIndex]]
    }
    return pairs
}

function displayCards(array){
    let str = ''
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            str += array[i][j] + '  '
        }
        if(i !== array.length - 1){
            str += '\n'
        }
    }
    console.log(str)
}

function spreadCardsInArray(row,column){
    const arrangedCards = groupCardsByValue()
    //change logic (use reduce to create 2D array)
    let array = Array(row + 1).fill(0).map(() => Array(column + 1).fill(0))
    const pairCount = row * column

    const shuffledCards = shuffleCards(arrangedCards, pairCount)
    let count = 0
    const hideCards = {}
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= column; j++) {
            if (count < shuffledCards.length) {
                hideCards[count] = shuffledCards[count]
                array[i][j] = count
                count++
            }
        }
    }
    //

   let filteredArray =  array.slice(1)
    .map(val => val
    .filter((e,i) => i !== 0))

    return {filteredArray, hideCards}
}

function pickACard(array, card){
    const {filteredArray, hideCards} = array
    const firstCard = hideCards[card] 
    for(let i = 0; i < filteredArray.length; i++){
        for(let j = 0; j < filteredArray[i].length; j++){
            if(card === filteredArray[i][j]){
                filteredArray[i][j] = firstCard
                break
            }
        }
    }
    return filteredArray
}

function hideCards(array, first_card, second_card){
    const {filteredArray, hideCards} = array
    for(let i = 0; i < filteredArray.length; i++){
        for(let j = 0; j < filteredArray[i].length; j++){
            if(hideCards[first_card] === filteredArray[i][j]){
                filteredArray[i][j] = Number(first_card)
            }
            else if(hideCards[second_card] === filteredArray[i][j]){
                filteredArray[i][j] = Number(second_card)
            }
        }
    }
    return filteredArray
}
function playerTurn(cards, n){
    let isEqual = false
    let player_score = 0
    const firstCard = prompt(`Player ${n}, pick your first card`)
    displayCards(pickACard(cards, Number(firstCard)))

    const secondCard = prompt(`Player ${n}, pick your second card`)
    displayCards(pickACard(cards, Number(secondCard)))

    if(cards.hideCards[Number(firstCard)].slice(2) === cards.hideCards[Number(secondCard)].slice(2)){
        player_score += 1
        isEqual = true
    }
    else{
        displayCards(hideCards(cards, firstCard, secondCard))
    }
    return {score: player_score, isEqual: isEqual, player: n}
}

function getWinner(scoreTable) {
   let players = Object.keys(scoreTable)
   return players.reduce((acc, cur) => scoreTable[cur] > scoreTable[acc] ? cur : acc)
}

function memoryGame(row, column){
    let cards = spreadCardsInArray(row,column)
    displayCards(cards.filteredArray)
    let numberOfPlayers = prompt('Enter number of players')
    let currentPlayer = 1
    let numberOfTurns = row*column
    let scoreTable = {}
    while(numberOfTurns > 0 && currentPlayer <= numberOfPlayers){
        let {score, isEqual, player} = playerTurn(cards, currentPlayer)
        scoreTable[player] = scoreTable[player] ? scoreTable[player] + score : score
        currentPlayer++
        if(isEqual){
            currentPlayer--
        }
        if(currentPlayer > numberOfPlayers){
            currentPlayer = 1
        }
        numberOfTurns = cards.filteredArray.map(subArray => subArray.filter(value => typeof value === 'number')).flat(1).length
    }
    let winner = getWinner(scoreTable)
    return `Winner is player ${winner} and score is ${scoreTable[winner]}`
}
console.log(memoryGame(2,3))
