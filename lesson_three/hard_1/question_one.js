function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return
  {
    prop1: "hi there";
  }
}

console.log(first());
console.log(second());

// => My answer:
// These will not return the same results.
// first returns the object { prop1: "hi there" }
// second returns undefined, since the return statement
// is not properly formatted
// JavaScript treats line 8 as if the statement ended there: return;