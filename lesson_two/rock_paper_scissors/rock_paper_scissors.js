const readline = require('readline-sync');
const VALID_CHOICES = ["rock", "paper", "scissors"];

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Welcome to rock, paper, scissors!');
prompt(`Enter your choice: ${VALID_CHOICES.join(', ')}`);
let choice = readline.question().toLowerCase();

while (!VALID_CHOICES.includes(choice)) {
  prompt('That is not a valid choice. Please try again!');
  choice = readline.question();
}

prompt('Computer is choosing its choice...');
let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
let computerChoice = VALID_CHOICES[randomIndex];

prompt(`You chose ${choice} and the computer chose ${computerChoice}.`);