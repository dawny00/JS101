let str1 = "Come over here!";
let str2 = "What's up, Doc?";

// => My answer:
console.log(str1[(str1.length - 1)] === "!"); // true
console.log(str2[(str2.length - 1)] === "!"); // false

// => Actual:
str1.endsWith("!"); // true
str2.endsWith("!"); // false