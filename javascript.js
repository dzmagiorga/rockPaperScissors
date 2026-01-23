/*

we need:

getComputerChoice:

getHumanChoice:

humanScore and computerScore:

playRound:

playGame:

*/


function getComputerChoice(){
    let choice = Math.random() * 3;
    if (choice < 1) return "rock";
    if (1 <= choice && choice < 2) return "paper";
    if (2 <= choice && choice < 3) return "scissors";
}

