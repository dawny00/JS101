function penultimate (words) {
  const wordsArray = words.split(" ");
  return wordsArray[wordsArray.length - 2];
}

console.log(penultimate("last word"));