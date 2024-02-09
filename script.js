function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

function getComputerChoice() {
    let randomNumber = getRandomNumber();
    if (randomNumber < 34) {
        return "Rock";
    } else if (randomNumber > 33 && randomNumber < 67) {
        return "Paper";
    } else {
        return "Scissors";
    }
};

let playerSelection = "";

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'Rock') {
            playerSelection = "Rock";
        } else if (button.textContent === 'Paper') {
            playerSelection = "Paper";
        } else if (button.textContent === 'Scissors') {
            playerSelection = "Scissors";
        }
        console.log(playerSelection);
        playRound();
    });
});

const divScore = document.querySelector('div');
const divTotal = document.querySelector('.score');
playerScore = 0;
computerScore = 0;

function resetGame() {
    if (playerScore === 5) {
        divScore.textContent = `Game over! Player won!`;
        divTotal.textContent = "";
        resetScores();
    } else if (computerScore === 5) {
        divScore.textContent = `Game over Computer won!`;
        divTotal.textContent = "";
        resetScores();
    }
};

function resetScores() {
    playerScore = 0;
    computerScore = 0;
}

function playRound (computerSelection) {
    computerSelection = getComputerChoice();
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        divScore.textContent = `Player won! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        divScore.textContent = `Player won! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        divScore.textContent = `Player won! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else if (playerSelection === computerSelection) {
        divScore.textContent = `It's a draw!`;
    } else {
        divScore.textContent = `Computer won! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }
    divTotal.textContent = `Player ${playerScore} : ${computerScore} Computer`;
    resetGame();
};



