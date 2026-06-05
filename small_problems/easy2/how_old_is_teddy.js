function randomBetweenInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const age = randomBetweenInclusive(20, 120);
console.log(`Teddy is ${age} years old!`);