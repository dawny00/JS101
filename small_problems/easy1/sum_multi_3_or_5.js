function multisum(number) {
  let sum = 0;

  for (let counter = 1; number > counter;) {
    if (number % 3 === 0 || number % 5 === 0) {
      sum += number;
    }
    number -= 1;
  }

  return sum;
}

console.log(multisum(20));