const readline = require('readline-sync');

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function calculate(num1, num2, operation) {
  switch (operation) {
    case '1':
      return num1 + num2;
    case '2':
      return num1 - num2;
    case '3':
      return num1 / num2;
    case '4':
      return num1 * num2;
    default:
      return null;
  }
}

prompt('Welcome to The Calculator! 🤓\n');
let additionalCalculation;

do {
  // Gather input
  prompt('What is the first number?');
  let num1 = Number(readline.question());

  prompt('What is the second number?');
  let num2 = Number(readline.question());

  prompt('What operation would you like to perform on these numbers? Enter 1, 2, 3, or 4.\n 1) Add ➕\n 2) Subtract ➖\n 3) Divide ➗\n 4) Multiply ✖️');
  let operation = readline.question();

  // Perform the operation
  let result = calculate(num1, num2, operation);

  if (result === null) {
    prompt('That is not a valid operation.');
  } else {
    console.log(`The result is ${result}`);
  }

  // Optionally perform another operation
  prompt('Would you like to perform another calculation? Y or N');
  additionalCalculation = readline.question().trim().toUpperCase();

} while (additionalCalculation[0] === "Y");