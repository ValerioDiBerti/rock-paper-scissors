let playerScore = 0;
let computerScore = 0;

// game();


const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');

buttons.forEach(button => {
    button.addEventListener('click',() => {
        result.innerText = (playRound(button.id, getComputerChoice()))
    })
});


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

    let roundResult = ''; 
    let winner = ''

    if (playerSelection === computerSelection) {
        roundResult = `It's a tie! You both chose ${playerSelection}\n`
    }

    else if (playerSelection === 'paper' && computerSelection === 'rock'
        || playerSelection === 'rock' && computerSelection === 'scissors'
        || playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        roundResult = `You win! ${playerSelection} beats ${computerSelection}\n`
    }

    else {
        computerScore++;
        roundResult = `You lose! ${computerSelection} beats ${playerSelection}\n`
    }

    if (playerScore > computerScore) {
        winner = 'player';
    } else {
        winner = 'computer';
    }

    roundResult += `The score is: Player - Computer: ${playerScore} - ${computerScore}\n`

    if (playerScore === 5 || computerScore === 5) {
        roundResult += `GAME OVER. The winner is ${winner}`;
        playerScore = 0;
        computerScore = 0;
    } 
    return roundResult;

}

function game() {
    const ROUNDS = 5;

    let playerSelection;
    let computerSelection;

    for (i = 0; i < ROUNDS; i++) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        result.innerText = (playRound(playerSelection, computerSelection));
    }

    switch (true) {
        case playerScore > computerScore:
            result.innerText = (`Player won! The score is ${playerScore}-${computerScore}`);
            break;
        case computerScore > playerScore:
            result.innerText = (`Computer won! The score is ${computerScore}-${playerScore}`);
            break;
        case playerScore === computerScore:
            result.innerText = ('It\'s a tie');
            break;
    }
}

