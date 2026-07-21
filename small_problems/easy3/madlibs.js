const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Enter a noun:');
const noun = readline.question();

prompt('Enter a verb:');
const verb = readline.question();

prompt('Enter an adjective:');
const adjective = readline.question();

prompt('Enter an adverb:');
const adverb = readline.question();

console.log(`
  Ashby leaned against the cockpit console, watching the stars slide by, when Lovelace's voice crackled to life.

  "Ashby, ${verb}! It's important," she said.

  Ashby set down his ${noun} and looked up at the nearest speaker.

  "I've been running diagnostics," Lovelace continued ${adverb}, "and I think I've found something ${adjective} in the nav data."

  Ashby braced for the worst — a black hole, a hull breach, an angry Toremi fleet.

  "It's a coupon," Lovelace announced. "Forty percent off algae paste at the next fuel depot."

  Ashby stared at the speaker for a long moment. "You made that sound like we were about to die."

  "I was practicing my dramatic delivery," Lovelace said. Ashby just laughed and went back to watching the stars.
`);