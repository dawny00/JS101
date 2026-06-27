let munstersDescription = "The Munsters are creepy and spooky.";
let switched = "";

for (let index = 0; index < munstersDescription.length; index++) {
  if (munstersDescription[index] === munstersDescription[index].toUpperCase()) {
    switched += munstersDescription[index].toLowerCase();
  } else if (munstersDescription[index] === munstersDescription[index].toLowerCase()) {
    switched += munstersDescription[index].toUpperCase();
  }
}

console.log(switched);