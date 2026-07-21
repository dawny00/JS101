/*

Input:
  Positive integer, n

Output:
  Right triangle whose sides each have n stars


Validation:

  Input: 5
  Output:

      *
     **
    ***
   ****
  *****

Mental model:
  Build the right triangle top down, logging each line to the console
  The first row must have space characters equal to n - 1 then 1 star
  The second row must have space characters equal to n - 2 then 2 stars
  The third row must have space characters equal to n - 3 then 3 stars
  The fourth row must have space characters equal to n - 4 then 4 stars
  The fith row must have space characters equal to n - 5 then 5 stars
  Once n has been reached (5 in this example) stop

Tests:
  triangle(5);
  triangle(9);

*/

function triangle(size) {
  let counter = 1;

  while (counter <= size) {
    console.log(' '.repeat(size - counter) + '*'.repeat(counter));
    counter++;
  }
}

triangle(5);
triangle(9);
