let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

// => My answer:
console.log([...statement1].filter((value) => value === 't').length);
console.log([...statement2].filter((value) => value === 't').length);