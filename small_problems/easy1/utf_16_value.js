function utf16Value (string) {
  let stringValue = 0;

  for (const character of string) {
    stringValue += character.charCodeAt();
  }

  return stringValue;
}

console.log(utf16Value('Launch School'));