function getMiddleWord (words) {
  const wordsArray = words.split(" ").filter(word => word.length > 0);

  if (wordsArray.length === 0) {
    return `You did not enter any words. To return the middle word, you must provide an input with an odd number of words. Please try again.`;
  }

  if (wordsArray.length === 1) {
    return `You only entered one word. To return the middle word, you must provide an input with an odd number of words. Please try again.`;
  }

  if (wordsArray.length % 2 === 0) {
    return `Your input contains ${wordsArray.length} words. This is an even amount of words. To return the middle word, you must provide an input with an odd number of words. Please try again.`;
  }

  let middleIndex = Math.floor(wordsArray.length / 2);
  return wordsArray[middleIndex];
}

console.log(getMiddleWord("one two three"));
console.log(getMiddleWord(""));
console.log(getMiddleWord("one two"));