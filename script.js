// returns the computer's choice (rock/paper/scissors)
function getComputerChoice() {
    // generate integer between 0 and 2 and store it a variable
    const choice = Math.floor(Math.random() * 3);
    // IF (random number = 0)
    if (choice === 0) {
    //      THEN return rock
        return "rock";
    }
    // IF (random number = 1)
    if (choice === 1) {
    //      THEN return paper
        return "paper";
    }
    // IF (random number = 2)
    if (choice === 2) {
    //      THEN return scissors
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
        return `You win! ${playerSelection} beats ${computerSelection}`
    } 
    
    else { 
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }

}

const playerSelection = 'paper';
const computerSelection = getComputerChoice(); 

console.log(playerSelection);
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));