const readline = require('readline-sync');

console.log("This tool determines the sum or product of all integers between 1 and the provided integer, inclusive. Let's get started!");

console.log('Enter a number greater than 0. Only enter integer numbers with no decimals are allowed (e.g., 1 or 50)');
let inputNumber = Number(readline.question());
while (isNaN(inputNumber) || inputNumber <= 0) {
  console.log('That is not a valid integer. Please try again.');
  inputNumber = Number(readline.question());
}

console.log('Would you like to determine the sum or product? Enter s for sum or p for product.');
let operation = readline.question().toLowerCase();
while (operation[0] !== 's' && operation[0] !== 'p') {
  console.log('That is not a valid operation. Please try again.');
  operation = readline.question().toLowerCase();
}

if (operation[0] === 's') {
  const totalSum = sum(inputNumber);
  console.log(`The sum of the integers between 1 and ${inputNumber} is ${totalSum}.`);
} else if (operation[0] === 'p') {
  const totalProduct = product(inputNumber);
  console.log(`The product of the integers between 1 and ${inputNumber} is ${totalProduct}.`);
}

function sum(num) {
  let total = 0;

  while (num >= 1) {
    total += num;
    num--;
  }

  return total;
}

function product(num) {
  let total = 1;

  while (num >= 1) {
    total *= num;
    num--;
  }

  return total;
}