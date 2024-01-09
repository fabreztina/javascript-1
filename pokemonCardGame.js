function createPokemonCards(count) {
    let cards = Array(count).fill(0).map(() => ({}))
    let characteristics = ['height', 'weight', 'fire', 'wind', 'water']

    for (let i = 0; i < count; i++) {
        characteristics.map(characteristic => {
            if (characteristic === 'height') {
                cards[i][characteristic] = parseFloat((Math.random() * 9 + 1).toFixed(1))
            } else if (characteristic === 'weight') {
                cards[i][characteristic] = parseFloat((Math.random() * 199 + 1).toFixed(1))
            } else {
                cards[i][characteristic] = Math.floor(Math.random() * 25)
            }
        })
    }
    return cards
}

function splitCardsToPlayers(cards, count){

    const player1 = cards.slice(0, count/2)
    const player2 = cards.slice(count/2)

    return {player1, player2}
}

function pickCards(playerNumber, player1, player2){
    let currentPlayerTopCard
    let oppositePlayerTopCard
    let oppositePlayerNumber
    if(playerNumber === 1){
        currentPlayerTopCard = player1.shift()
        oppositePlayerTopCard = player2.shift()
        oppositePlayerNumber = 2
    }
    else{
       currentPlayerTopCard = player2.shift()
       oppositePlayerTopCard = player1.shift()
       oppositePlayerNumber = 1
    }
    console.log(currentPlayerTopCard, playerNumber)
    let characteristic = prompt(`Player ${playerNumber}, pick a characteristic`)

    if(currentPlayerTopCard[characteristic] !== undefined){
        console.log(`Player ${playerNumber} score : ${currentPlayerTopCard[characteristic]}`)
        console.log(`Player ${oppositePlayerNumber} score : ${oppositePlayerTopCard[characteristic]}`)
    }

    return {
        characteristic: characteristic, 
        currentPlayerTopCard: currentPlayerTopCard,
        oppositePlayerTopCard: oppositePlayerTopCard, 
    }
}



function chooseDifferentCharacteristic(currentPlayerTopCard, playerNumber, characteristic) {
    let pickedCharacteristic = prompt(`Player ${playerNumber}, please pick a new characteristic`)

    while (pickedCharacteristic !== undefined && characteristic === pickedCharacteristic) {
        pickedCharacteristic = prompt(`Player ${playerNumber}, please pick a new characteristic`)
    }

    return { characteristicValue: currentPlayerTopCard[pickedCharacteristic], newCharacteristic: pickedCharacteristic }
}


function getNextPlayerUsingSameCard(currentPlayerTopCard, playerNumber, oldCharacteristic, oppositePlayerTopCard){
    let {characteristicValue, newCharacteristic} = chooseDifferentCharacteristic(currentPlayerTopCard, playerNumber, oldCharacteristic)
    let oppositePlayerNumber = playerNumber === 1 ? 2 : 1

    console.log(`Player ${playerNumber} score : ${currentPlayerTopCard[newCharacteristic]}`)
    console.log(`Player ${oppositePlayerNumber} score : ${oppositePlayerTopCard[newCharacteristic]}`)

    if(characteristicValue > oppositePlayerTopCard[newCharacteristic]){
        return playerNumber === 1 ? 1 : 2
    }
    else if(characteristicValue < oppositePlayerTopCard[newCharacteristic]){
        return playerNumber === 1 ? 2 : 1
    }
    else{
        return getNextPlayerUsingSameCard(currentPlayerTopCard, playerNumber, newCharacteristic, oppositePlayerTopCard)
    }
}

function addLooserCardToWinnerCards(winnerCards, looserTopCard, winnerTopCard){
    return [...winnerCards, looserTopCard, winnerTopCard]
}

function getNextPlayer(playerNumber, characteristic, currentPlayerTopCard, oppositePlayerTopCard, player1, player2){

    if(currentPlayerTopCard[characteristic] > oppositePlayerTopCard[characteristic]){
        if(playerNumber === 1) {
            playerNumber = 1
            player1 = addLooserCardToWinnerCards(player1, oppositePlayerTopCard, currentPlayerTopCard)
        }
        else{
            playerNumber = 2
            player2 = addLooserCardToWinnerCards(player2, oppositePlayerTopCard, currentPlayerTopCard)
        }
    }
    else if(currentPlayerTopCard[characteristic] < oppositePlayerTopCard[characteristic]){
        if(playerNumber === 1){
            playerNumber = 2
            player2  = addLooserCardToWinnerCards(player2, currentPlayerTopCard, oppositePlayerTopCard)
        }
        else{
            playerNumber = 1
            player1  = addLooserCardToWinnerCards(player1, currentPlayerTopCard, oppositePlayerTopCard)
        }
    }
    else{
        playerNumber = getNextPlayerUsingSameCard(currentPlayerTopCard, playerNumber, characteristic, oppositePlayerTopCard)
        if(playerNumber === 1){
            playerNumber = 1
            player1 = addLooserCardToWinnerCards(player1, oppositePlayerTopCard, currentPlayerTopCard)

        }
        else{
            playerNumber = 2
            player2 = addLooserCardToWinnerCards(player2, currentPlayerTopCard, oppositePlayerTopCard) 

        }
    }
    return {p1: player1, p2: player2, pn: playerNumber}
}

function exitOrContinueTheGame() {
    const userChoice = prompt('Do you want to continue the game? (Enter "yes" or "no")')
    return userChoice.toLowerCase() === 'yes' ? true : false
}

function displayWinnerAndScore(player1, player2) {
    console.log(player1, player2, 'length')
    console.log('Player 1 score:', player1.length)
    console.log('Player 2 score:', player2.length)

    if (player1.length > player2.length) {
        console.log('Player 1 is the winner!')
    } else if (player1.length < player2.length) {
        console.log('Player 2 is the winner!')
    } else {
        console.log("It's a tie!")
    }
}

function pokemonCardGame(count){
    let cards = createPokemonCards(count)
    let {player1, player2} = splitCardsToPlayers(cards, count)
    let playerNumber = 1, isGameStarting = true

    while((isGameStarting ? true : exitOrContinueTheGame()) && player1.length > 0 && player2.length > 0){
        let {characteristic, 
            currentPlayerTopCard, 
            oppositePlayerTopCard} = pickCards(playerNumber, player1, player2) 
        let {p1, p2, pn} = getNextPlayer(playerNumber, characteristic, currentPlayerTopCard, oppositePlayerTopCard, player1, player2)
        player1 = p1
        player2 = p2
        playerNumber = pn
        console.log('player 1 cards => ',player1,' player 2 cards => ', player2)
        isGameStarting = false
    }
    return displayWinnerAndScore(player1, player2)
}

console.log(pokemonCardGame(30))