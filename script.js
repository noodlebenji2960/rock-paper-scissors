let choices = ["rock", "paper", "scissors", "lizard", "spock"];

function resetAndStart() {
  userScore = 0;
  computerScore = 0;
  game();
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * Math.floor(choices.length))];
}

let computerSelection = getComputerChoice();
let userScore = parseInt(0);
let computerScore = parseInt(0);

function playRound(playerSelection, computerSelection) {
  if ( (playerSelection == 'rock' && (computerSelection === 'scissors' || computerSelection === 'lizard'))
    || (playerSelection == 'paper' && (computerSelection === 'rock' || computerSelection == 'spock'))
    || (playerSelection == 'scissors' && (computerSelection === 'paper' || computerSelection === 'lizard'))
    || (playerSelection == 'spock' && (computerSelection === 'scissors' || computerSelection === 'rock'))
    || (playerSelection == 'lizard' && (computerSelection === 'paper' || computerSelection === 'spock'))) {
      userScore++;
      return ("Yay! You won the round! " + playerSelection + " beats " + computerSelection);
  }
  else if (computerSelection === playerSelection){
      return ("oh no! Looks like a draw!");
  }
  else {
      computerScore++;
      return ("Sorry, you lost the round. " + computerSelection + " beats " + playerSelection);
  }
}

function game() {
  for (let i = 1; i <6; i++) {
    let promptText = prompt("Choose either Rock, Paper, Scissors, Lizard or Spock");
    let playerSelection = promptText.toLowerCase();
    let computerSelection = getComputerChoice();
    console.log('\n', "---Round " + i + "---");
    console.log(playRound(playerSelection, computerSelection));
    console.log("You chose: " + playerSelection);
    console.log("Computer chose: " + computerSelection);
    console.log("your score : " + userScore);
    console.log("Computer's score : " + computerScore);

    if (i == 5) {
      if (userScore > computerScore){
        console.log('\n', ("-----G R E A T  W O R K !-----"));
        console.log(("You won " + userScore + " out of 5 rounds."),'\n',("Computer won " + computerScore + " out of 5 rounds."));
      }
      else {
        if(userScore = computerScore) {
          console.log('\n', ("-----ITS A DRAW!-----"));
          console.log(("You won " + userScore + " out of 5 rounds."),'\n',("Computer won " + computerScore + " out of 5 rounds."));
        }
        else{
          console.log('\n', ("-----YOU LOST!-----"));
          console.log(("You won " + userScore + " out of 5 rounds."),'\n',("Computer won " + computerScore + " out of 5 rounds."));
        }
      }
    }
  }
}

let btn = document.getElementById("startgamebutton");
btn.addEventListener('click', event => {
  (resetAndStart());
});