let munstersDescription = "The Munsters are creepy and spooky.";
let upperCaseLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
let lowerCaseLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d","f","g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n","m"];
let switched = "";

for (let index = 0; index < munstersDescription.length; index++) {
  if (upperCaseLetters.includes(munstersDescription[index])) {
    switched += munstersDescription[index].toLowerCase();
  } else if (lowerCaseLetters.includes(munstersDescription[index])) {
    switched += munstersDescription[index].toUpperCase();
  }
}

console.log(switched);