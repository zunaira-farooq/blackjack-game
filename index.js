let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

function randNumber() {
    let randCard = Math.floor(Math.random()*13)+1
    
    if(randCard === 1) {
        return 11
    } else if(randCard>=11 && randCard<=13) {
        return 10
    } else {
        return randCard
    }
}
    
function startGame() {
    isAlive = true
    let firstCard = randNumber()
    let secondCard = randNumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
    renderGame()
}
function renderGame() {
    
    cardsEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if(sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
}

function newCard() {
    if(isAlive === true && hasBlackJack === false) {
        let card = randNumber()
        sum+=card
        cards.push(card)
        renderGame()
    }
    
}