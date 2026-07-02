function boo(scare) {
  let myBoo = scare.toUpperCase() + "!!!";
  console.log(myBoo);
}

const halloweenCollection = {
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
};

let myBoo = boo(halloweenCollection["greet"]);

// => My answer
//  variables:
/*
      boo (function)
      scare (function scope parameter)
      myBoo (function scope)
      halloweenCollection (constant)
      myBoo (global scope)
*/

// primitive values:
/*
      "greet"
      "scare"
      "wish"
      "Happy Halloween"
      "Boo"
      "May all your pumpkins be glowing"
      "greet"
      "Happy Halloween"
      "HAPPY HALLOWEEN"
      "!!!"
      "HAPPY HALLOWEEN!!!"
      "HAPPY HALLOWEEN!!!"
      undefined
*/

// objects:
/*
      boo (function)
      halloweenCollection (object literal)
*/