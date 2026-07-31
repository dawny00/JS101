/*

Input:
  year (number)

Output:
  century (string) with suffix 'st', 'nd', 'rd', or 'th'

Validation:
  Input: 2000
  Output: 20th

  Input: 2001
  Output: 21st

  Input: 5
  Output: 1st

Mental model:

  Century = 100 years

  Year 1 to 100 is the first century
  Year 101 to 200 is the second century
  Year 201 to 300 is the third century
  ...

  Numbers ending in 1 are st
  Numbers ending in 2 are nd
  Numbers ending in 3 are rd
  Numbers ending in 0, 4 - 9, 11, 12, 13 are th

  1. Divide num by 100 and utilize Math.round and Math.ceil
  2. This will produce the number of the century
  3. Append the suffix

  num = 2001;
  => 2001
  num / 100;
  => 20.01
  Math.round(Math.ceil(20.01));
  => 21
  Ends with 1 so 'st' suffix is appended
  => 21st

*/

function century(year) {
  let century = Math.ceil((year / 100)).toString();

  const lastDigit = century[century.length - 1];
  const lastTwoDigits = century.slice(-2);
  if (lastTwoDigits === '11' ||
      lastTwoDigits === '12' ||
      lastTwoDigits === '13') {
        century += 'th';
        return century;
  }

  switch (lastDigit) {
    case '1':
      century += 'st';
      break;
    case '2':
      century += 'nd';
      break;
    case '3':
      century += 'rd';
      break;
    default:
      century += 'th';
      break;
  }

  return century;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"