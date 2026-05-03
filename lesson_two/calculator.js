const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Welcome to The Calculator! 🤓\n');

prompt('What is the first number?');
const number1 = readline.question();

prompt('What is the second number?');
const number2 = readline.question();

prompt('What operation would you like to perform on these numbers? Enter 1, 2, 3, or 4.\n 1) Add ➕\n 2) Subtract ➖\n 3) Divide ➗\n 4) Multiply ✖️');
const operation = readline.question();

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