let computerScore = 0;
let humanScore = 0;
const choiceButtons = document.querySelector("#choiceButtons");

// playGame(5);


function getComputerChoice(){
    let choice = Math.random() * 3;
    if (choice < 1) return "rock";
    if (1 <= choice && choice < 2) return "paper";
    if (2 <= choice && choice < 3) return "scissors";
}

// function getHumanChoice(){
//     let choice = prompt("Please enter your choice - rock, paper or scissors:");
//     if (choice === null) return "rock";
//     choice = choice.toLowerCase();
//     if (choice === "rock" || choice === "paper" || choice === "scissors") return choice;
//     else {
//         alert("you have to choose EXACTLY one of the three,\ntry again...");
//         return getHumanChoice();
//     }
// }

function displayRound(string){
    const resultPara = document.querySelector("#roundResult");
    resultPara.textContent = string;
}

function displayGame(string){
    const resultPara = document.querySelector("#gameResult");
    resultPara.textContent = string;
}

function compWinText(humanChoice, computerChoice){
    displayRound(`You chose ${humanChoice}, I chose ${computerChoice}, I WIN!!! >:D`);
}

function compLoseText(humanChoice, computerChoice){
    displayRound(`You chose ${humanChoice}, I chose ${computerChoice}.. I lose :/  :(`);
}

function drawText(humanChoice){
    displayRound(`You chose ${humanChoice}, so did I, it's a draw :|`);
}

function playRound(event){
    let computerChoice = getComputerChoice();
    let humanChoice = event.target.id;
    
    if (humanChoice === computerChoice){
        drawText(humanChoice);
    }
    if ( (humanChoice === "rock" && computerChoice === "scissors") ||
         (humanChoice === "scissors" && computerChoice === "paper") ||
         (humanChoice === "paper" && computerChoice === "rock" )
    ){
        compLoseText(humanChoice, computerChoice);
        humanScore++;
    }
    if ( (humanChoice === "rock" && computerChoice === "paper") ||
         (humanChoice === "paper" && computerChoice === "scissors") ||
         (humanChoice === "scissors" && computerChoice === "rock")
    ){
        compWinText(humanChoice, computerChoice);
        computerScore++;
    }

    displayGame(`Your score: ${humanScore} \nMy score: ${computerScore}`);

    if(humanScore === 5 && humanScore > computerScore)
        displayGame(`You won the game >:(`);
    if (computerScore === 5 && humanScore < computerScore)
        displayGame(`I WON THE GAME!! :D loser`);
    if (computerScore === 5 && humanScore === computerScore)
        displayGame(`It's a draw. You're lucky I spared you`);
}

function playGame(n){
    humanScore = 0;
    computerScore = 0;

    choiceButtons.addEventListener("click", playRound);
}

playGame(5);