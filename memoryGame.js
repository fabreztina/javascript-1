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
    for (let i = 0; i < splitNumbersAndDesign.length; i += 2) {
        let key = splitNumbersAndDesign[i]
        let design = splitNumbersAndDesign[i + 1]
        let card = `${key}-${design}`

        if (!groupCards[key]) {
            groupCards[key] = [card]
        } else {
            groupCards[key].push(card)
        }
    }
    return Object.values(groupCards)
}

function chooseRandomPair(arrangedCards, pairCount){
    let pairs = []
    while (pairCount > 0) {
        let pickRandomPair = arrangedCards[Math.floor(Math.random() * arrangedCards.length)]
        if (pickRandomPair.length > 1) {
            let pickedPair = pickRandomPair.slice(0, 2)
            pairs.push(pickedPair)
            arrangedCards = arrangedCards.map(subArray => subArray.filter(card => !pickedPair.includes(card)))
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

function spreadCardsInArray(row,column){
    const arrangedCards = groupCardsByValue()
    let array = Array(row + 1).fill(0).map(() => Array(column + 1).fill(0))
    const pairCount = row * column

    const shuffledCards = shuffleCards(arrangedCards, pairCount)
    let count = 0

    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= column; j++) {
            if (count < shuffledCards.length) {
                array[i][j] = shuffledCards[count]
                count++
            }
        }
    }
    return array
}
console.log(spreadCardsInArray(2,5))
