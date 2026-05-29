const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Enter the first number:');
const number1 = Number(readline.question());

prompt('Enter the second number:');
const number2 = Number(readline.question());

// addition
prompt(`${number1} + ${number2} = ${number1 + number2}`);

// subtraction
prompt(`${number1} - ${number2} = ${number1 - number2}`);

// multiplication
prompt(`${number1} * ${number2} = ${number1 * number2}`);

// division (quotient)
prompt(`${number1} / ${number2} = ${Math.floor(number1 / number2)}`);

// remainder
prompt(`${number1} % ${number2} = ${number1 % number2}`);

// power
prompt(`${number1} ** ${number2} = ${number1 ** number2}`);