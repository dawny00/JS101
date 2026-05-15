const readline = require('readline-sync');
const SQ_METERS_TO_SQ_FEET = 10.7639;

console.log('Enter the length of the room in meters:');
const length = Number(readline.prompt());

console.log('Enter the width of the room in meters:');
const width = Number(readline.prompt());

const squareMeters = length * width;
const squareFeet = squareMeters * SQ_METERS_TO_SQ_FEET;
console.log(`The area of the room is ${squareMeters.toFixed(2)} square meters (${squareFeet.toFixed(2)} square feet).`);