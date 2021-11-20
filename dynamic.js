
let totalSum = document.getElementById("total-sum-el") 
let cardsDrawn = document.getElementById("card-drawn-el")
let message = document.getElementById("message-el")
let sum = 0
var cardsList = [] 

function startGame() {


}

function newCard() {
    sum = 0
    let card = Math.floor((Math.random() * 11) + 1)
    cardsList.push(card)
    cardsDrawn.textContent = "Cards Drawn: " + cardsList
    for (let i=0;i<cardsList.length;i++) {
        sum += cardsList[i]
    }
    totalSum.textContent = "Total Sum: " + sum
    if (sum === 21) {
        message.textContent = "WINNER, WELL DONE!"
        document.getElementById("new-card-btn").style.visibility="hidden"
        document.getElementById("start-btn").style.marginLeft = "150px"
    }
    if (sum > 21) {
        message.textContent = "You lost, unlucky!"
        document.getElementById("new-card-btn").style.visibility="hidden"
        document.getElementById("start-btn").style.marginLeft = "150px"
    }
}

function startGame() {
    document.getElementById("start-btn").style.marginLeft = "0px"
    cardsList = []
    sum = 0
    cardsDrawn.textContent = "Cards Drawn: " + cardsList
    totalSum.textContent = "Total Sum: "
    document.getElementById("new-card-btn").style.visibility="visible";
    message.textContent = ""

}



