/*

we need:

getComputerChoice: done

getHumanChoice: done

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

function getHumanChoice(){
    let choice = prompt("Please enter your choice - rock, paper or scissors:")
    if (choice === "rock" || choice === "paper" || choice === "scissors") return choice;
    else if (choice === null) return "rock";
    else {
        alert("you have to choose EXACTLY one of the three,\ntry again...");
        return getHumanChoice();
    }
}



