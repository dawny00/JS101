/*

Input:
  number (positive or negative)

Output:
  number (negative)

If the input number is positive, return the negative of that number
If the input number is negative, return the number as-is

Validation:
  Input: 5
  number >= 0 ? -number : number
    5 >= 0 ? -5 : number
  Output: -5

  Input: -3
  number >= 0 ? -number : number
    -3 >= 0 ? -number : -3
  Output: -3

  Input: 0
  number >= 0 ? -number : number
    0 >= 0 ? -0 : number
  Output: -0

Mental model:
  Return the negation of a positive number. Use >= 0 to determine this.
  If the number is already negative, return it as-is.
    1. Create a ternary expression
    2. If the input number is greater than or equal to 0, return its negation
    3. If the input is less than 0, return the number

Tests:
  negative(5);     // -5
  negative(-3);    // -3
  negative(0);     // -0

*/

function negative(number) {
  return number >= 0 ? -number : number;
}

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));