let numbers = [1, 2, 3, 4, 5];

// => My original answer:
let numbersCopy = [];
numbers.forEach((value) => numbersCopy.push(value));

console.log(numbersCopy.reverse());
console.log(numbersCopy.sort((num1, num2) => num2 - num1));

// => Refactored answer:
let reversed = numbers.slice().reverse();
console.log(reversed);

let sorted = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sorted);