/*

Input:
  Exactly three numbers representing scores, all between 0 and 100, inclusive

Output:
  String letter, A, B, C, D or F, representing the average grade

Validation:

  Input: 95, 90, 93
  Average: 92.6
  Output: 'A'

  Input: 50, 50, 95
  Average: 65
  Output: 'D'

Mental model:

  Find the average of the three input numbers
  Use a conditional (possibly a case) to determine the grade
  Return the grade

*/

function getGrade(num1, num2, num3) {
  const average = (num1 + num2 + num3) / 3;
  let grade = '';

  if (average < 60) {
    grade = 'F';
  } else if (average < 70) {
    grade = 'D';
  } else if (average < 80) {
    grade = 'C';
  } else if (average < 90) {
    grade = 'B';
  } else {
    grade = 'A';
  }

  return grade;
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"