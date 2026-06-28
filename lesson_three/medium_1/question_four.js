// Mutates the array object passed in when invoking the function
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// Does not mutate the array object passed in when invoking the function 
// and instead creates a new array using concat
function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

let buffer1 = ["A", "B", "C"];
let result1 = addToRollingBuffer1(buffer1, 3, "D");

console.log(result1);
console.log(buffer1);

let buffer2 = ["A", "B", "C"];
let result2 = addToRollingBuffer2(buffer2, 3, "D");

console.log(result2);
console.log(buffer2);