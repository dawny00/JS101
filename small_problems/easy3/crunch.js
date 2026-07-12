/*

Input:
  text string

Output:
  input string with all consecutive duplicate characters collapsed into a single character

If the input string is empty, return the empty string
If the input string has no consecutive duplicate characters, return the string as-is
If the input string contains spaces, retain the spaces
If the input string contains consecutive duplicate numbers, collapse them

Validation:
  Input: 'ddaaiillyy ddoouubbllee'
  Output: "daily double"

  Input: '4444abcabccba'
  Output: "4abcabcba"

  Input: 'a'
  Output: "a"

  Input: ''
  Output: ""

Mental model:

  Return a new string  containing the original value of the input string, with all consecutive duplicate characters collapsed. Use a loop to compare elements. 
  1. Start with an empty result string
  2. Loop through the input string one character at a time
  3. For each character:
    - If the current element does not equal the next element, add this element to the result string
  4. Return the result string

Tests:
  crunch('ddaaiillyy ddoouubbllee');    // "daily double"
  crunch('4444abcabccba');              // "4abcabcba"
  crunch('ggggggggggggggg');            // "g"
  crunch('a');                          // "a"
  crunch('');                           // ""

*/

function crunch(text) {
  let result = '';

  for (let i = 0; i < text.length ; i++) {
    if (text[i] !== text[i + 1]) {
      result += text[i];
    }
  }

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));
console.log(crunch('ggggggggggggggg'));
console.log(crunch('a'));
console.log(crunch(''));