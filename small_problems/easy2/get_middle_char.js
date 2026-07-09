/*

Input:
  non-empty string
Output:
  middle character of input string

Return value must be...
  one letter if the string is odd
  two letters if the string is even
  and the entire string if it's one character

If the string is even:
  Find the first middle index by dividing the string's length by 2
  Return two characters at the first index and the following index
If the string is odd:
  Find the middle index by dividing the string's length by 2
  Return character at that index

Validation:
  Input string: abc
  Output: b
  String length: 3
  Middle index: 1
    (length - 1) / 2 = middleIndex
    (3 - 1) / 2 = 1

  Input string: abcd
  Output: bc
  String length: 4
  Middle indexes: 1, 2
    Returns the left-most index:
      (length - 2) / 2 = leftMiddleIndex
      leftMiddleIndex + 1 = rightMiddleIndex


Tests:
  centerOf('I Love JavaScript');  // "a"
  centerOf('Launch');             // "un"
  centerOf('x');                  // "x"

Mental model:
  1. Create an empty number variable called middleIndex
  2. Create an empty string variable called middleCharacter
  3. Check whether the input string is even or odd using %
  4. If it's odd, reassign middleIndex to (string.length - 1) / 2
  5. Reassign middleCharacter to the middleIndex of the input string
  6. If it's even, reassign middleIndex to (string.length - 2) / 2 to get the left-most index
  7. Reassign middleCharacter to the middleIndex of the input string and concat (middleIndex + 1)
  8. Return the middleCharacter

*/

function centerOf(string) {
  let middleIndex = 0;
  let middleCharacter = '';

  if (string.length % 2 === 1) {
    middleIndex = (string.length - 1) / 2;
    middleCharacter = string[middleIndex];
  } else {
    middleIndex = (string.length - 2) / 2;
    middleCharacter = string[middleIndex] + string[middleIndex + 1];
  }

  return middleCharacter;
}

console.log(centerOf('I Love JavaScript'));
console.log(centerOf('Launch'));
console.log(centerOf('x'));