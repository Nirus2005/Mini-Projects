const buttons = document.querySelectorAll("button")

const result = document.getElementById("result")

const playerScoree = document.getElementById("user-score")
const computerScoree = document.getElementById("computer-score")

let playerScore = 0
let computerScore = 0

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
    const resultText=playRound(button.id, computerPlay())
    result.textContent = resultText
})
})

function computerPlay() {
    const choice = ["rock","paper","scissors"]
    const randomChoice  = Math.floor(Math.random()*choice.length)
    return choice[randomChoice]
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return "It's a tie!"
    } else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){  
        playerScore++
        playerScoree.textContent = playerScore
        return "You Win! " + playerSelection + "beats " + computerSelection
    } else{
        computerScore++
        computerScoree.textContent = computerScore
        return "You Lose! "+ computerSelection + " beats " + playerSelection
    }
    
}