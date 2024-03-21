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

// Schere/Stein/Papier als Zufallszahlen
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);

    let computerChoice;
 
 /*   if (randomNumber === 0) {
        computerChoice = "Schere";
    }
    if (randomNumber === 1) {
        computerChoice = "Stein";
    }
    if (randomNumber === 2) {
        computerChoice = "Papier";
    }

    */

    switch(randomNumber) {
        case 0:
            computerChoice = "Schere";
            break;
        case 1:
            computerChoice = "Stein";
            break;
        case 2:
            computerChoice = "Papier";
            break;
        default:
            computerChoice = "Unknown";
    }

    computerChoiceDisplay.innerHTML = computerChoice;
    determineWinner(playerChoice, computerChoice);
}

// Vergleicht die beiden und gibt Ergebnis zurück
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        resultDisplay.innerHTML = "Unentschieden";
    } else if (
        (playerChoice === "Schere" && computerChoice === "Papier") ||
        (playerChoice === "Stein" && computerChoice === "Schere") ||
        (playerChoice === "Papier" && computerChoice === "Stein")
    ) {
        resultDisplay.innerHTML = "Du gewinnst!";
    } else {
        resultDisplay.innerHTML = "Computer gewinnt!";
    }
}
