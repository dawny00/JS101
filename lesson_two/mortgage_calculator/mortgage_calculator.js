const readline = require('readline-sync');
let additionalCalculation;

do {
  runCalculator();

  // Optionally perform another calculation
  prompt('Would you like to perform another calculation? Y or N');
  additionalCalculation = readline.question().trim().toUpperCase();

} while (additionalCalculation[0] === 'Y');

function prompt(message) {
  console.log(`=> ${message}`);
}

function runCalculator() {
  prompt('Use this calculator for basic calculations of common loan types such as mortgages, auto loans, student loans, or personal loans.');

  // Gather input
  prompt('Enter the total loan amount. e.g., 300000 or 25000');
  let loanAmount = Number(readline.question());
  // invalidNumber(loanAmount);

  prompt('Enter the APR of your loan. e.g., enter 5 for 5%');
  let apr = Number(readline.question());
  // invalidNumber(apr);

  prompt('Enter the total loan duration in years. e.g., 30 or 5');
  let loanDurationYears = Number(readline.question())
  // invalidNumber(loanDurationYears);

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

/*

function invalidNumber(number) {
  if (Number.isNaN(number)) {
    prompt('That is not a valid input. Please try again.');
  }
}

*/