const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');
const SUPPORTED_LANGUAGES = ['english', 'spanish', 'french'];
let language;
let additionalCalculation;

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

prompt(MESSAGES['english']['welcome']);

// Decide language
prompt(MESSAGES['english']['language']);

while (true) {
  language = readline.question().trim().toLowerCase();

  if (!language) {
    language = 'english';
    break;
  }

  if (SUPPORTED_LANGUAGES.includes(language)) {
    break;
  }

  if (language && !SUPPORTED_LANGUAGES.includes(language)) {
    prompt('That is not a supported language yet. Please choose from English, Spanish, or French.');
  }
}

do {
  // Gather input
  prompt(MESSAGES[language]['number1']);
  const num1 = Number(readline.question());

  prompt(MESSAGES[language]['number2']);
  const num2 = Number(readline.question());

  prompt(MESSAGES[language]['operation']);
  const operation = readline.question();

  // Perform the operation
  const result = calculate(num1, num2, operation);

  if (result === null) {
    prompt(MESSAGES[language]['invalid']);
  } else {
    prompt(`${MESSAGES[language]['results']} ${result}`);
  }

  // Optionally perform another operation
  prompt(MESSAGES[language]['anotherOperation']);
  additionalCalculation = readline.question().trim().toUpperCase();

} while (additionalCalculation[0] === 'Y');