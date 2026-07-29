/*

Input:
  String consisting of words and non-alphabetic characters (- + & * ?)

Output:
  Return input string with all non-alphabetic characters replaced by spaces
  If more than one non-alphabetic character occurs in a row, only have one space character—the result should never have consecutive spaces

Validation:

  Input: "---what's my +*& line?"
  Output " what s my line "

  Input: "h$llo th$re"
  Output: "h llo th re"

Mental model:

  Split the input string into array elements using the split method
  For every element, determine if it's alphabetical
  If it is, add it to a new string
  If it's not, add a space character to the string, but only if the last character is not a space character

*/

function cleanUp(text) {
  const allowedChars = 'qwertyuiopasdfghjklzxcvbnm';
  let cleanText = '';

  for (let i = 0; i < text.length; i++) {
    if (allowedChars.includes(text[i].toLowerCase())) {
      cleanText += text[i];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "