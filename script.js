let choices = ["rock", "paper", "scissors", "lizard", "spock"];
let userScore = parseInt(0)
let computerScore = parseInt(0)

function getComputerChoice() {
  return choices[Math.floor(Math.random() * Math.floor(choices.length))];
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  if ( (playerSelection === 'rock' && (computerSelection === 'scissors' || computerSelection === 'lizard'))
    || (playerSelection === 'paper' && (computerSelection === 'rock' || computerSelection == 'spock'))
    || (playerSelection === 'scissors' && (computerSelection === 'paper' || computerSelection === 'lizard'))
    || (playerSelection === 'spock' && (computerSelection === 'scissors' || computerSelection === 'rock'))
    || (playerSelection === 'lizard' && (computerSelection === 'paper' || computerSelection === 'spock'))) {
      userScore++
      document.getElementById("results").textContent = "Yay! You won the round! " + playerSelection + " beats " + computerSelection;
      updateScore()
  }
  else if (computerSelection === playerSelection){
    document.getElementById("results").textContent = "oh no! Looks like a draw!";
    updateScore()
  }
  else {
    computerScore++
    document.getElementById("results").textContent = "Sorry, you lost the round. " + computerSelection + " beats " + playerSelection;
    updateScore()
  }
}

function hideOnboarding() {
  document.getElementById("videoContainer").innerHTML = "";
}

function updateScore() {
  document.getElementById("score").textContent ="YOUR SCORE: " + userScore + " COMPUTER SCORE: " + computerScore;

  if (userScore == 5 || computerScore == 5)
    if(userScore >computerScore) {
      document.getElementById("results").textContent = "Congratulations You have Won!!";
      document.getElementById("optionsButtons").innerHTML = "";
    }
    else if (userScore == computerScore) {
      document.getElementById("results").textContent = "It's a draw!";
      document.getElementById("optionsButtons").innerHTML = "";
    }
    else {
      document.getElementById("results").textContent = "GAME OVER!";
      document.getElementById("optionsButtons").innerHTML = "";
    }
}

let hideOnboardingBtn = document.getElementById("hideOnboardingButton");
hideOnboardingBtn.addEventListener('click', event => {
  (hideOnboarding());
});

let rockBtn = document.getElementById("rockButton");
rockBtn.addEventListener('click', event => {
  (playRound("rock"));
});

let paperBtn = document.getElementById("paperButton");
paperBtn.addEventListener('click', event => {
  (playRound("paper"));
});

let scissorsBtn = document.getElementById("scissorsButton");
scissorsBtn.addEventListener('click', event => {
  (playRound("scissors"));
});

let lizardBtn = document.getElementById("lizardButton");
lizardBtn.addEventListener('click', event => {
  (playRound("lizard"));
});

let spockBtn = document.getElementById("spockButton");
spockBtn.addEventListener('click', event => {
  (playRound("spock"));
});

//TO DO
//change this beats that to rock smashes lizard, spock vaporizes rock, etc.
