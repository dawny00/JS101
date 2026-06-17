let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => Expected: The munsters are creepy and spooky.

// => My answer:
console.log(
  munstersDescription.charAt(0).toUpperCase() + munstersDescription.slice(1).toLowerCase()
);