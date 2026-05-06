const readline = require('readline-sync');

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Welcome to The Calculator! 🤓\n');

prompt('What is the first number?');
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number. Please enter a new number.");
  number1 = readline.question();
}

prompt('What is the second number?');
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number. Please enter a new number.");
  number2 = readline.question();
}

const VALID_OPERATIONS = ['1', '2', '3', '4'];

prompt('What operation would you like to perform on these numbers? Enter 1, 2, 3, or 4.\n 1) Add ➕\n 2) Subtract ➖\n 3) Divide ➗\n 4) Multiply ✖️');
let operation = readline.question();

while (!VALID_OPERATIONS.includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}

// Perform the operation
let result;
switch (operation) {
  case '1':
    result = Number(number1) + Number(number2);
    break;
  case '2':
    result = Number(number1) - Number(number2);
    break;
  case '3':
    result = Number(number1) / Number(number2);
    break;
  case '4':
    result = Number(number1) * Number(number2);
    break;
}

console.log(`The result is ${result}`);