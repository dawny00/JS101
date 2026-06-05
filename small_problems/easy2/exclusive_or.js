function xor(a, b) {
  return ((a && !b) || (!a && b));
}

console.log(xor(false, false));