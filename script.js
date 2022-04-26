// console.log("Hello World!")

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random()*3);

    return choices[choice] 
}

// console.log(computerPlay())

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result = "tie";

    if (playerSelection == "rock") {
        result = computerSelection == "Paper" ? "lose" : result;
        result = computerSelection == "Scissors" ? "win" : result;
    }
    else if (playerSelection == "paper") {
        result = computerSelection == "Rock" ? "win" : result;
        result = computerSelection == "Scissors" ? "lose" : result;
    }
    else if (playerSelection == "scissors") {
        result = computerSelection == "Rock" ? "lose" : result;
        result = computerSelection == "Paper" ? "win" : result;
    }
    
    // return [playerSelection, computerSelection]
    return result
}

// console.log(playRound('ROck', computerPlay()));

function game() {
    const rounds = 5;
    for (let i=0; i<rounds; i++) {
        let userChoice = prompt("Choose rock, paper, or scissors.");
        let computerChoice = computerPlay();
        let result = playRound(userChoice, computerChoice); 
        let message = `You ${result}!`;

        switch (result) {
            case "win":
                message = `${message} ${userChoice} beats ${computerChoice}`;
                break;
            case "lose":
                message = `${message} ${userChoice} loses to ${computerChoice}`;
                break;
            case "tie":
                message = `${message} ${userChoice} ties with ${computerChoice}`;
                break;
        }
        // console.log(`You ${result}! ${userChoice} ${computerChoice}`)
        console.log(message);
    }
}

game();