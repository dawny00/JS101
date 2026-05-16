const readline = require('readline-sync');
let additionalCalculation;

while (true) {
  prompt('Use this calculator for basic calculations of common loan types such as mortgages, auto loans, student loans, or personal loans.');

  // Gather input
  prompt('Enter the total loan amount. e.g., 300000 or 25000');
  let loanAmount = Number(readline.question());
  while (invalidNumber(loanAmount)) {
    prompt('Must enter a valid positive number.');
    loanAmount = Number(readline.question());
  }

  prompt('Enter the APR of your loan. e.g., enter 5 for 5%');
  let apr = Number(readline.question());
  while (invalidNumber(apr)) {
    prompt('Must enter a valid positive APR.');
    apr = Number(readline.question());
  }

  prompt('Enter the total loan duration in years. e.g., 30 or 5');
  let loanDurationYears = Number(readline.question());
  while (invalidNumber(loanDurationYears)) {
    prompt('Must enter a valid positive number.');
    loanDurationYears = Number(readline.question());
  }

  // Perform conversions and calculations
  let monthlyInterestRate = calculateMonthlyInterestRate(apr);
  let loanDurationMonths = calculateLoanDurationMonths(loanDurationYears);
  let monthlyPayment = calculateMonthlyPayment(
    loanAmount,
    monthlyInterestRate,
    loanDurationMonths
  );

  // Log the result
  prompt(monthlyPayment);

  // Optionally perform another calculation
  prompt('Would you like to perform another calculation?');
  additionalCalculation = readline.question().trim().toLowerCase();
  while (additionalCalculation[0] !== 'y' && additionalCalculation[0] !== 'n') {
    prompt('Please enter Y for yes or N for no.');
    additionalCalculation = readline.question().trim().toLowerCase();
  }

  if (additionalCalculation[0] === 'n') {
    break;
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function calculateMonthlyInterestRate(apr) {
  // User enters APR as whole number so divide by 100 to get decimal percentage
  return (apr / 100) / 12;
}

function calculateLoanDurationMonths(loanDurationYears) {
  return loanDurationYears * 12;
}

function calculateMonthlyPayment(
  loanAmount,
  monthlyInterestRate,
  loanDurationMonths) {

  let rateFactor = Math.pow((1 + monthlyInterestRate), (-loanDurationMonths));
  let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - rateFactor));

  return `$${monthlyPayment.toFixed(2)}`;
}

function invalidNumber(number) {
  return number === '' ||
        isNaN(number) ||
        number <= 0;
}