function generateDeckOfCards() {
    const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    const designs = ['D', 'H', 'S', 'C']
    let deckOfCards = []

    for (let i = 0; i < designs.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            deckOfCards.push(`${numbers[j]}-${designs[i]}`)
        }
    }
    return deckOfCards
}
// generateDeckOfCards()
function groupCardsByValue() {
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

function chooseRandomPair(arrangedCards, pairCount) {
    let pairs = []
    while (pairCount > 0) {
        let pickRandomPairPosition = Math.floor(Math.random() * arrangedCards.length)
        let randomPair = arrangedCards[pickRandomPairPosition]
        if (randomPair.length > 1) {
            let pickedPair = randomPair.slice(0, 2)
            pairs.push(pickedPair)
            // arrangedCards = arrangedCards.map(subArray => subArray.filter(card => !pickedPair.includes(card)))
            arrangedCards.splice(pickRandomPairPosition, 2)
            pairCount -= 2
        }
    }
    return pairs.flat(1)
}

function shuffleCards(arrangedCards, pairCount) {
    let pairs = chooseRandomPair(arrangedCards, pairCount)
    let currentIndex = pairs.length, randomIndex

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        [pairs[currentIndex], pairs[randomIndex]] = [pairs[randomIndex], pairs[currentIndex]]
    }
    return pairs
}

function displayCards(array) {
    let str = ''
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            str += array[i][j] + '  '
        }
        if (i !== array.length - 1) {
            str += '\n'
        }
    }
    console.log(str)
}

function spreadCards(row, column) {
    const arrangedCards = groupCardsByValue()
    const pairCount = row * column

    const hiddenCards = shuffleCards(arrangedCards, pairCount)
    .reduce((acc, currentCard, index) => {
        acc[index] = currentCard
        return acc
    }, {})

    let count = 0
    let array = Array(row).fill(0).map(() => Array(column).fill(0))
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            array[i][j] = count
            count++
        }
    }

    return { filteredArray: array, hiddenCards }
}
// console.log(spreadCards(2,5))

function pickACard(cards, card) {
    const { filteredArray, hiddenCards } = cards
    const firstCard = hiddenCards[card]
    for (let i = 0; i < filteredArray.length; i++) {
        for (let j = 0; j < filteredArray[i].length; j++) {
            if (card === filteredArray[i][j]) {
                filteredArray[i][j] = firstCard
                break
            }
        }
    }
    return filteredArray
}

function hideUnmatchedCards(array, first_card, second_card) {
    const { filteredArray, hiddenCards } = array
    for (let i = 0; i < filteredArray.length; i++) {
        for (let j = 0; j < filteredArray[i].length; j++) {
            if (hiddenCards[first_card] === filteredArray[i][j]) {
                filteredArray[i][j] = Number(first_card)
            }
            else if (hiddenCards[second_card] === filteredArray[i][j]) {
                filteredArray[i][j] = Number(second_card)
            }
        }
    }
    return filteredArray
}
function getPlayerScoreForEachTurn(cards, currentPlayer, scoreTable) {
    let isEqual = false
    let firstCard = prompt(`Player ${currentPlayer}, pick your first card`)
    while (cards.hiddenCards[Number(firstCard)] === true) {
        firstCard = prompt(`Player ${currentPlayer}, the card is already picked. Please pick a new card`)
    }
    displayCards(pickACard(cards, Number(firstCard)))

    let secondCard = prompt(`Player ${currentPlayer}, pick your second card`)
    while (cards.hiddenCards[Number(secondCard)] === true || cards.hiddenCards[Number(firstCard)] === cards.hiddenCards[Number(secondCard)]) {
        secondCard = prompt(`Player ${currentPlayer}, the card is already picked. Please pick a new card`)
    }
    displayCards(pickACard(cards, Number(secondCard)))

    if (cards.hiddenCards[Number(firstCard)].slice(2) === cards.hiddenCards[Number(secondCard)].slice(2)) {
        cards.hiddenCards[Number(firstCard)] = true
        cards.hiddenCards[Number(secondCard)] = true
        scoreTable[currentPlayer] = scoreTable[currentPlayer] ? scoreTable[currentPlayer] + 1 : 1
        isEqual = true
    }
    else {
        displayCards(hideUnmatchedCards(cards, firstCard, secondCard))
    }

    return isEqual
}

function getWinner(scoreBoard) {
    let maxScore = 0, winners = []
    for(const [player, score] of Object.entries(scoreBoard)){
        if(score > maxScore){
            maxScore = score
            winners = [player]
        }
        else if(score === maxScore){
            winners.push(player)
        }
    }  
    return {winners , maxScore}
}

function getNextPlayer(numberOfPlayers, currentPlayer){
   return currentPlayer >= numberOfPlayers ? 1 : currentPlayer + 1
}

function isGameOver(cards){
    return cards.filteredArray.map(subArray => subArray.filter(value => typeof value === 'number'))
    .flat(1).length === 0
}

function memoryGame(row, column) {
    let numberOfPlayers = prompt('Enter number of players')
    let cards = spreadCards(row, column)
    displayCards(cards.filteredArray)
    let currentPlayer = 1
    let scoreBoard = {}
    while (!isGameOver(cards)) {
        let isEqual = getPlayerScoreForEachTurn(cards, currentPlayer, scoreBoard)
        if (!isEqual) {
            currentPlayer = getNextPlayer(numberOfPlayers, currentPlayer)
        }
    }
    let {winners, maxScore} = getWinner(scoreBoard)

    if(winners.length > 1){
        return `Match is tie between players ${winners} and the score is ${maxScore}`
    }
    return `Winner is player ${winners} and score is ${maxScore} `
}
console.log(memoryGame(2,4))
