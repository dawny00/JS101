const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function getName() {
  while (true) {
    prompt('What is your name?');
    let input = readline.question().trim();
    if (input) return input;
  }
}

const name = getName();

if (name[name.length - 1] === '!') {
  prompt(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  prompt(`Hello ${name}.`);
}