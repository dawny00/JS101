let numbers = [1, 2, 3, 4];

// => My answers:
numbers.splice(0, numbers.length);

numbers.length = 0;

while (numbers.length) {
  numbers.pop();
}