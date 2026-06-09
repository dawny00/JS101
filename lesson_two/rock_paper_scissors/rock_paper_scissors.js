const readline = require('readline-sync');
const VALID_CHOICES = ["rock", "paper", "scissors"];

function prompt(message) {
  console.log(`=> ${message}`);
}

function determineWinner(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'paper' && computerChoice === 'rock')) {
    return 'You won!';
  } else if (choice === computerChoice) {
    return "It's a tie!";
  } else {
    return 'Computer won!';
  }
}

let answer;
do {
  prompt('Welcome to rock, paper, scissors!');
  prompt(`Enter your choice: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt('That is not a valid choice. Please try again!');
    choice = readline.question().toLowerCase();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice} and the computer chose ${computerChoice}.`);
  prompt(determineWinner(choice, computerChoice));

  prompt('Would you like to play again? (y/n)');
  answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt('Please enter y to play again or n to quit the game.');
    answer = readline.question().toLowerCase();
  }

} while (answer[0] === 'y');