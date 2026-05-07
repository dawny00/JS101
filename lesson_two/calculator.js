const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');

/*

Commenting out for now.
Will revisit in a future improvement with additional number validation.

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

*/

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

prompt(MESSAGES.welcome);
let additionalCalculation;

do {
  // Gather input
  prompt(MESSAGES.number1);
  const num1 = Number(readline.question());

  prompt(MESSAGES.number2);
  const num2 = Number(readline.question());

  prompt(MESSAGES.operation);
  const operation = readline.question();

  // Perform the operation
  const result = calculate(num1, num2, operation);

  if (result === null) {
    prompt(MESSAGES.invalid);
  } else {
    prompt(`${MESSAGES.results} ${result}`);
  }

  // Optionally perform another operation
  prompt(MESSAGES.anotherOperation);
  additionalCalculation = readline.question().trim().toUpperCase();

} while (additionalCalculation[0] === "Y");