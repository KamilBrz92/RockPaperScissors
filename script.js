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

promptIntake = "";

function getPlayerSelection () {
    let promptIntake = prompt("Rock, Paper, or Scissors?");
    playerSelection = promptIntake.charAt(0).toUpperCase() + promptIntake.slice(1).toLowerCase();
    return playerSelection;
}

function playRound (computerSelection, playerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerSelection();
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log(`Player won! ${playerSelection} beats ${computerSelection}`)
        playerScore++;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log(`Player won! ${playerSelection} beats ${computerSelection}`)
        playerScore++;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log(`Player won! ${playerSelection} beats ${computerSelection}`)
        playerScore++;
    } else if (playerSelection === computerSelection) {
        (console.log(`It's a draw!`))
    } else {
        console.log (`Computer won! ${computerSelection} beats ${playerSelection}`)
        computerScore++;
    }
};

playerScore = 0;
computerScore = 0;


function playGame () {
    for (i = 0; i < 5; i++) {
        playRound();
        console.log(`Player: ${playerScore}`);
        console.log(`Computer: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log(`Congrats! You won ${playerScore}:${computerScore}`)
    } else if (playerScore < computerScore) {
        console.log(`Booo! You lost ${computerScore}:${playerScore}`)
    } else {
        console.log(`It's a draw! Why not play again?`)
    }
    playerScore = 0;
    computerScore = 0;
}