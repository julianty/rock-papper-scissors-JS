let score = 0;
let computerScore = 0;

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

function game(userChoice) {
    let computerChoice = computerPlay();
    let result = playRound(userChoice, computerChoice); 
    let message = `You ${result}!`;
    let rounds = 5;
    let resultParagraph  = document.querySelector("p#result");
    let scoreParagraph = document.querySelector("p#score");

    switch (result) {
        case "win":
            score += 1;
            message = `${message} ${userChoice} 
                    beats ${computerChoice}`;
            break;
        case "lose":
            computerScore += 1;
            message = `${message} ${userChoice} 
                    loses to ${computerChoice}`;
            break;
        case "tie":
            message = `${message} ${userChoice} 
                    ties with ${computerChoice}`;
            break;
    }
    resultParagraph.textContent = message;
    if (score >= rounds || computerScore >= rounds) {
        scoreParagraph.textContent = 
                score > computerScore ? 'User wins!' : 'Computer wins!';
        return
    }
    scoreParagraph.textContent = `User: ${score}/${rounds}, 
            Computer: ${computerScore}/${rounds}`;
}

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    // console.log(button.id);
    button.addEventListener('click', () => console.log(game(button.id)));
});


// console.log(buttons);
// game();