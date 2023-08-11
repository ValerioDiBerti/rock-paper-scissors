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

console.log(getComputerChoice())