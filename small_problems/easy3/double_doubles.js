/*

What is a double number?
  Even length
  Left-side digits are exactly the same as right-side digits
  44   <- 4 and 4
  3333 <- 33 and 33
  7676 <- 76 and 76

Input:
  Number

Output:
  Number * 2 unless Number is a double number, then return as-is

Validation:

  Input: 37
  Output: 74

  Input: 44
  Output: 44

Mental model:

  If the length of n is odd, we know n is not a double number.
  If the length of n is even, n could be a double number.
  Extract the first half of n and the last half of n.
  Compare them to determine if n is a double number.

*/

function twice(num) {
  const numString = num.toString();
  const numLength = numString.length;
  const isEven = numLength % 2 === 0;
  const midpoint = numLength / 2;
  const leftHalf = numString.substring(0, midpoint);
  const rightHalf = numString.substring(midpoint);

  return isEven && leftHalf === rightHalf ? num : num * 2;
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(103103));