const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('What is your current age?');
const currentAge = Number(readline.question());

prompt('At what age would you like to retire?');
const retirementAge = Number(readline.question());

const workYearsToGo = (retirementAge - currentAge);
const currentYear = new Date().getFullYear();
const retirementYear = (currentYear + workYearsToGo);

prompt(`It's ${currentYear}. You will retire in ${retirementYear}.`);
prompt(`You only have ${workYearsToGo} years of work to go!`);