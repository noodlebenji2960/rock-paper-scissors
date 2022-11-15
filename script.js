let choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
  return choices[Math.floor(Math.random() * Math.floor(choices.length))]
}

let computerSelection = getComputerChoice();
let userScore = parseInt(0);
let computerScore = parseInt(0);

function playRound(playerSelection, computerSelection) {
  if ((playerSelection == 'rock' && computerSelection === 'scissors') || (playerSelection == 'paper' && computerSelection === 'rock') || (playerSelection == 'scissors' && computerSelection === 'paper')) {
      userScore++;
      return ("Yay! You won the round! " + playerSelection + " beats " + computerSelection);
  }
  else if ((playerSelection == 'rock' && computerSelection === 'paper') || (playerSelection == 'paper' && computerSelection === 'scissors') || (playerSelection == 'scissors' && computerSelection === 'rock')) {
      computerScore++;
      return ("Sorry, you lost the round. " + computerSelection + " beats " + playerSelection);
  }
  else {
      return ("oh no! Looks like a draw!");
  }
}

function game() {
  for (let i = 1; i <6; i++) {
    let promptText = prompt("Choose either Rock, Paper or Scissors");
    let playerSelection = promptText.toLowerCase();
    let computerSelection = getComputerChoice();
    console.log('\n', "---Round " + i + "---")
    console.log(playRound(playerSelection, computerSelection))
    console.log("You chose: " + playerSelection)
    console.log("Computer chose: " + computerSelection)
    console.log("your score : " + userScore);
    console.log("Computer's score : " + computerScore);

    if (i == 5) {
      if (userScore > computerScore){
        console.log('\n', ("-----G R E A T  W O R K !-----"))
        console.log(("You won " + userScore + " out of 5 rounds."),'\n',("Computer won " + computerScore + " out of 5 rounds."))
      }
      else {
        console.log('\n', ("-----B A D  L U C K !-----"))
        console.log(("You won " + userScore + " out of 5 rounds."),'\n',("Computer won " + computerScore + " out of 5 rounds."))
      }
    }
  }
}

let btn = document.getElementById("startgamebutton");
btn.addEventListener('click', event => {
  game();
});


