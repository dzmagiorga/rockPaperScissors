/*

we need:

getComputerChoice: done

getHumanChoice: done

humanScore and computerScore: done

playRound: 

playGame: 

*/


function getComputerChoice(){
    let choice = Math.random() * 3;
    if (choice < 1) return "rock";
    if (1 <= choice && choice < 2) return "paper";
    if (2 <= choice && choice < 3) return "scissors";
}

function getHumanChoice(){
    let choice = prompt("Please enter your choice - rock, paper or scissors:").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") return choice;
    else if (choice === null) return "rock";
    else {
        alert("you have to choose EXACTLY one of the three,\ntry again...");
        return getHumanChoice();
    }
}

let computerScore = 0;
let humanScore = 0;

function compWinText(humanChoice, computerChoice){
    console.log(`You chose ${humanChoice}, I chose ${computerChoice}, I WIN!!! >:D`);
}

function compLoseText(humanChoice, ComputerChoice){
    console.log(`You chose ${humanChoice}, I chose ${computerChoice}.. I lose :/  :(`);
}

function drawText(humanChoice){
    console.log(`You chose ${humanChoice}, so did I, it's a draw :|`);
}

function playRound(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    if (humanChoice === computerChoice){
        drawText(humanChoice);
        return;
    }
    if ( (humanChoice === "rock" && computerChoice === "scissors") ||
         (humanChoice === "scissors" && computerChoice === "paper") ||
         (humanChoice === "paper" && computerChoice === "rock" )
    ){
        compLoseText(humanChoice, computerChoice);
        computerScore++;
        return;
    }
    if ( (humanChoice === "rock" && computerChoice === "paper") ||
         (humanChoice === "paper" && computerChoice === "scissors") ||
         (humanChoice === "scissors" && computerChoice === "rock")
    ){
        compWinText(humanChoice, computerChoice);
        computerScore++;
        return;
    }
}