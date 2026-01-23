/*

we need:

getComputerChoice: done

getHumanChoice: done

humanScore and computerScore: done

playRound: done

playGame: 

*/


function getComputerChoice(){
    let choice = Math.random() * 3;
    if (choice < 1) return "rock";
    if (1 <= choice && choice < 2) return "paper";
    if (2 <= choice && choice < 3) return "scissors";
}

function getHumanChoice(){
    let choice = prompt("Please enter your choice - rock, paper or scissors:");
    if (choice === null) return "rock";
    choice = choice.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") return choice;
    else {
        alert("you have to choose EXACTLY one of the three,\ntry again...");
        return getHumanChoice();
    }
}

let computerScore = 0;
let humanScore = 0;

function compWinText(humanChoice, computerChoice){
    alert(`You chose ${humanChoice}, I chose ${computerChoice}, I WIN!!! >:D`);
}

function compLoseText(humanChoice, computerChoice){
    alert(`You chose ${humanChoice}, I chose ${computerChoice}.. I lose :/  :(`);
}

function drawText(humanChoice){
    alert(`You chose ${humanChoice}, so did I, it's a draw :|`);
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
        humanScore++;
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

function playGame(n){
    humanScore = 0;
    computerScore = 0;
    console.log(`We will play ${n} rounds,`)
    for (let i = 1; i <= n; i++){
        alert(`Time for round ${i}/${n}:`)
        playRound();
        alert(`Your score: ${humanScore} \nMy score: ${computerScore}`);
    }
    
    if(humanScore > computerScore) alert(`You won the game >:(`);
    else if (humanScore < computerScore) alert(`I WON THE GAME!! :D loser`);
    else alert(`It's a draw. You're lucky I spared you`);
}