function shortLongShort (stringOne, stringTwo) {
  /*
  if (stringOne.length < stringTwo.length) {
    return stringOne + stringTwo + stringOne;
  } else {
    return stringTwo + stringOne + stringTwo;
  }
  */

  return stringOne.length < stringTwo.length ?
    stringOne + stringTwo + stringOne :
    stringTwo + stringOne + stringTwo;
}

console.log(shortLongShort('abcde', 'fgh')); // "fghabcdefgh"