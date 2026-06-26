function isColorValid(color) {
 return color === "blue" || color === "green";
}

function isColorValid(color) {
  return ["blue", "green"].includes(color);
}