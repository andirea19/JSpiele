const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let playerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventlistener('click', (e) => {
    playerChoice =e.targetid
    playerChoiceDisplay.innerHTML = playerChoice
    generateComputerChoice()

}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber)

    if (randomNumber == 1) {
        generateComputerChoice = "Schere"
    }
    if (randomNumber == 2) {
        generateComputerChoice = "Stein"
    }
    if (randomNumber == 3) {
        generateComputerChoice = "Papier"
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}