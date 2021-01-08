const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const WINS = 5;

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  return ((choice === "scissors" && computerChoice === "paper") ||
         (choice === "paper" && computerChoice === "rock") ||
         (choice === "rock" && computerChoice === "lizard") ||
         (choice === "lizard" && computerChoice === "spock") ||
         (choice === "spock" && computerChoice === "scissors") ||
         (choice === "scissors" && computerChoice === "lizard") ||
         (choice === "lizard" && computerChoice === "paper") ||
         (choice === "paper" && computerChoice === "spock") ||
         (choice === "spock" && computerChoice === "rock") ||
         (choice === "rock" && computerChoice === "scissors"));
}

function computerWins(choice, computerChoice) {
  return ((choice === "scissors" && computerChoice === "rock") ||
         (choice === "scissors" && computerChoice === "spock") ||
         (choice === "paper" && computerChoice === "scissors") ||
         (choice === "paper" && computerChoice === "lizard") ||
         (choice === "rock" && computerChoice === "paper") ||
         (choice === "rock" && computerChoice === "spock") ||
         (choice === "lizard" && computerChoice === "rock") ||
         (choice === "lizard" && computerChoice === "scissors") ||
         (choice === "spock" && computerChoice === "paper") ||
         (choice === "spock" && computerChoice === "lizard"));
}

let playerScore = 0;
let computerScore = 0;


function totalScore(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    playerScore += 1;
    prompt(`--------Your current score is ${playerScore} and computer's score is ${computerScore}.--------`);
  } else if (computerWins(choice, computerChoice)) {
    computerScore += 1;
    prompt(`Computer's current score is ${computerScore} and your score is ${playerScore}`);
  }
}

function roundWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    prompt("You win!");
  } else if (computerWins(choice, computerChoice)) {
    prompt("Computer Wins!");
  } else {
    prompt("It's a tie!");
  }
}

function gameWinner() {
  if (playerScore === WINS) {
    prompt("You win the game!");
  } else if (computerScore === WINS) {
    prompt("Computer wins the game!");
  }
}


while (true) {
  console.clear();

  prompt("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
  prompt("First to five wins is the victor!");

  while ((playerScore < 5) && (computerScore < 5)) {
    prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
    let choice = readline.question();

    while (!VALID_CHOICES.includes(choice)) {
      console.log("That is not a valid choice!");
      choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    prompt(`You chose ${choice}, while computer chose ${computerChoice}.`);

    roundWinner(choice, computerChoice);
    totalScore(choice, computerChoice);
    gameWinner();
  }

  playerScore = 0;
  computerScore = 0;

  prompt("Do you want to play again (y/n)?");
  let answer = readline.question().toLowerCase();

  while (answer[0] !== "y" && answer[0] !== "n") {
    prompt("Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== "y") break;
}
