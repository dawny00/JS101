const readline = require('readline-sync');
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins (choice, computerChoice) {
  return  (choice === 'rock' && computerChoice === 'scissors') ||
          (choice === 'rock' && computerChoice === 'lizard') ||
          (choice === 'scissors' && computerChoice === 'paper') ||
          (choice === 'scissors' && computerChoice === 'lizard') ||
          (choice === 'paper' && computerChoice === 'rock') ||
          (choice === 'paper' && computerChoice === 'spock') ||
          (choice === 'spock' && computerChoice === 'rock') ||
          (choice === 'spock' && computerChoice === 'scissors') ||
          (choice === 'lizard' && computerChoice === 'spock') ||
          (choice === 'lizard' && computerChoice === 'paper');
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
  prompt('Welcome to rock, paper, scissors, lizard, spock!');
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