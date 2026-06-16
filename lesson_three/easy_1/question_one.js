let numbers = [1, 2, 3];
numbers[6] = 5;

console.log(numbers);
// My answer: => [1, 2, 3, undefined, undefined, undefined, 5]
//    Actual: => [1, 2, 3, <3 empty items>, 5]

console.log(numbers[4]);
// My answer: => undefined
//    Actual: => undefined