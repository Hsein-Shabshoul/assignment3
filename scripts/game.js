let computerWins;
let playerWins;

function computerPlay() {
    let rand = Math.floor(Math.random() * (3) + 1);
    switch(rand){
        case 1:
            return "Rock";
        
        case 2:
            return "Paper";
        
        case 3: 
            return "Scissors";
    }
}

function playRound(player, computer) {
    let result;
    let playerLowerCase = player.toLowerCase();
    let computerLowerCase = computer.toLowerCase();
    let playerwon = false;
    if (playerLowerCase != computerLowerCase){ //if not tie, then check result
        switch(playerLowerCase){
            case "rock":
                if (computerLowerCase == "scissors")
                playerwon = true;
                result = "Rock🪨 crushes Scissors✂️";
                break;

            case "paper":
                if (computerLowerCase == "rock")
                playerwon = true;
                result = "Paper📃 covers Rock🪨";
                break;

            case "scissors": 
                if (computerLowerCase == "paper")
                playerwon = true;
                result = "Scissors✂️ cut Paper📃";
                break;

            default:
                return "Wrong entry";       
        }
    }
    else {
        return "Tie! Computer chose " + computer + " too!";
    }
    if (playerwon == true) {
        playerWins++;
        return "You won! " + result;
    }
    else {
        computerWins++;
        return "You lost! " + computer + " beats " + player;
    }
}

function game() {
    let computerSelection;
    let playerSelection;
    let result;
    playerWins = 0;
    computerWins = 0;
    for (let i = 0; i <5; i++){
        result = "";
        computerSelection = computerPlay();
        playerSelection = prompt("Enter your choice(Rock, Paper, Scissors):");
        console.log("Computer Selection: "+computerSelection);
        console.log("Player Selection: "+playerSelection);
        result = playRound(playerSelection, computerSelection);
        console.log("Round " + (i+1) + ": " + result + "\nYour wins: "+playerWins + " || Computer wins: "+computerWins);
        alert("Round " + (i+1) + ": " + result + "\nYour wins: "+playerWins + " || Computer wins: "+computerWins + "\nPress OK to start next round.");
    }
    if (playerWins>computerWins){
        console.log("YOU WON THE GAME!");
        alert("YOU WON THE GAME!");
    }
    else if (computerWins>playerWins){
        console.log("YOU LOST THE GAME!");
        alert("YOU LOST THE GAME!");
    }
    else {
        console.log("YOU TIED THE GAME!");
        alert("YOU TIED!");
    }
}
game();