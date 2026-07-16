/*

Input:
  one positive integer
  
Output:
  a string of '1's and '0's with a length equal to the input integer, starting with '1',

Mental model:
  Build a string starting with a 1. While the string's length is less than the input integer, add a character, either 0 or 1 depending on the position. 

Validation:
  Input 6
  Output: "101010"
  
  Input: 9
  Output: "101010101"
  
  Input: 4
  Output:"1010"
  
  Input: 7
  Output: "1010101"

Test:
  stringy(6);   
  stringy(9);    
  stringy(4);    
  stringy(7);

*/

function stringy(positiveInteger) {
  let result = '';

  for (let i = 0; i < positiveInteger; i++) {
    result += i % 2 === 0 ? '1' : '0';
  }

  return result;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"