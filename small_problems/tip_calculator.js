const readline = require('readline-sync');

console.log('What is the total bill amount? Enter 100 for $100 bill.');
const bill = Number(readline.question());

console.log('What is the tip rate? Enter 15 for 15% tip.');
const tipRate = (Number(readline.question()) / 100);

const tip = (bill * tipRate);
const total = (bill + tip);

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);