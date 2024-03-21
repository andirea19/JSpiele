const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let playerChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    generateComputerChoice();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);

    let computerChoice;
    if (randomNumber === 0) {
        computerChoice = "Schere";
    }
    if (randomNumber === 1) {
        computerChoice = "Stein";
    }
    if (randomNumber === 2) {
        computerChoice = "Papier";
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}
