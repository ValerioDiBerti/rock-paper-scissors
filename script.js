let playerScore = 0;
let computerScore = 0;

game();

function getPlayerChoice() {
    let repeat;
    let playerChoice;
    do {
        playerChoice = prompt('Choose rock/paper/scissors').toLowerCase();
        if (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
            alert('Choose between rock paper and scissors');
            repeat = true;
        } else {
            repeat = false;
        }
    } while (repeat === true);

    return playerChoice;
}

// returns the computer's choice (rock/paper/scissors)
function getComputerChoice() {
    // generate integer between 0 and 2 and store it a variable
    const choice = Math.floor(Math.random() * 3);
    // IF (random number = 0)
    if (choice === 0) {
        // THEN return rock
        return "rock";
    }
    // IF (random number = 1)
    if (choice === 1) {
        // THEN return paper
        return "paper";
    }
    // IF (random number = 2)
    if (choice === 2) {
        // THEN return scissors
        return "scissors";
    }
}

// returns the result of one round
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}`
    }

    else if (playerSelection === 'paper' && computerSelection === 'rock'
        || playerSelection === 'rock' && computerSelection === 'scissors'
        || playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`
    }

    else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }

}

function game() {
    const ROUNDS = 5;

    let playerSelection;
    let computerSelection;

    for (i = 0; i < ROUNDS; i++) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    switch (true) {
        case playerScore > computerScore:
            console.log(`Player won! The score is ${playerScore}-${computerScore}`);
            break;
        case computerScore > playerScore:
            console.log(`Computer won! The score is ${computerScore}-${playerScore}`);
            break;
        case playerScore === computerScore:
            console.log('It\'s a tie');
            break;
    }
}

