/*

Input:
  string text

Output:
  log string text within a box in the console
  
Validation:
  
  Input: 
    'To boldly go where no one has gone before.'
  Output:
    +--------------------------------------------+
    |                                            |
    | To boldly go where no one has gone before. |
    |                                            |
    +--------------------------------------------+
    
  Input:
    ''
  Output:
    +--+
    |  |
    |  |
    |  |
    +--+
    
Mental model:
  Using the length of the input string, build 3 variables to represent a box: the border line, the empty padding line, and the message line.
  
  1. Start with getting the length of the input text and store this in textLength.
  2. Build the border line variable with:
         one + character
         - characters equal to (textLength + 2)
         one + character
  3. Build the empty padding line variable with: 
         one | character
         space characters equal to (textLength + 2)
         one | character
  4. Building the message line variable with: 
         one | character
         one space character
         input string
         one space character
         one | character
  5. Log the box:
         border line variable
         \n
         empty padding line variable
         \n
         message line variable
         \n
         empty padding line variable
         \n
         border line variable

Tests:
  logInBox('To boldly go where no one has gone before.');
  logInBox('');

*/

function logInBox(text) {
  const textLength = text.length;
  
  const borderLine = '+' + '-'.repeat(textLength + 2) + '+';
  const paddingLine = '|' + ' '.repeat(textLength + 2) + '|';
  const messageLine = '|' + ' ' + text + ' ' + '|';
  
  console.log(borderLine);
  console.log(paddingLine);
  console.log(messageLine);
  console.log(paddingLine);
  console.log(borderLine);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');