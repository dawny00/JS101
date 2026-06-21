let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// => My answer:
let newFlintstones = [];
flintstones.forEach((value) => {
  if (Array.isArray(value)) {
    newFlintstones.push(...value);
  } else {
    newFlintstones.push(value);
  }
});

// => Refactored solution working with LSBot
newFlintstones = [].concat(...flintstones);
console.log(newFlintstones);