const readline = require('readline-sync');
const VALID_CHOICES = ["rock", "paper", "scissors"];

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins (choice, computerChoice) {
  return  (choice === 'rock' && computerChoice === 'scissors') ||
          (choice === 'scissors' && computerChoice === 'paper') ||
          (choice === 'paper' && computerChoice === 'rock');
}

function determineWinner(choice, computerChoice) {
  if (choice === computerChoice) {
    return "It's a tie!";
  } else if (playerWins(choice, computerChoice)) {
    return 'You won!';
  } else {
    return 'Computer won!';
  }
}

let answer;
do {
  prompt('Welcome to rock, paper, scissors! Best of five.');

  let playerScore = 0;
  let computerScore = 0;
  while (playerScore < 3 && computerScore < 3) {
    prompt(`Enter your choice: ${VALID_CHOICES.join(', ')}`);
    let choice = readline.question().toLowerCase();

    while (!VALID_CHOICES.includes(choice)) {
      prompt('That is not a valid choice. Please try again!');
      choice = readline.question().toLowerCase();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    prompt(`You chose ${choice} and the computer chose ${computerChoice}.`);
    let winner = determineWinner(choice, computerChoice);
    prompt(winner);

    if (winner === 'You won!') {
      playerScore++;
    } else if (winner === 'Computer won!') {
      computerScore++;
    }

    prompt(`Player score: ${playerScore}`);
    prompt(`Computer score: ${computerScore}`);

  }

  if (playerScore === 3) {
    prompt("Congratulations, you're the winner!");
  } else {
    prompt('Computer won! Better luck next time.');
  }

  prompt('Would you like to play again? (y/n)');
  answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt('Please enter y to play again or n to quit the game.');
    answer = readline.question().toLowerCase();
  }

  playerScore = 0;
  computerScore = 0;

} while (answer[0] === 'y');