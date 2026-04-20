const readline = require('readline-sync');

console.log('Welcome to The Calculator! 🤓');

const number1 = readline.question('What is the first number?\n');

const number2 = readline.question('What is the second number?\n');

// Ask the user which operation they want to perform (+, -, /, *)
const operation = readline.question('What operation would you like to perform on these numbers?\n 1) Add ➕\n 2) Subtract ➖\n 3) Divide ➗\n 4) Multiply ✖️\n');

// Perform the operation
let result;
if (operation === '1') {
  result = Number(number1) + Number(number2);
} else if (operation === '2') {
  result = Number(number1) - Number(number2);
} else if (operation === '3') {
  result = Number(number1) / Number(number2);
} else if (operation === '4') {
  result = Number(number1) * Number(number2);
}

// Display the operation result
console.log(`The result is ${result}`);