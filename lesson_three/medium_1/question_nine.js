function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

// => My answer:
// We must evaluate the inner most function invocations first
// to substitute their return values in the next call

// The outermost rps function invocation passes these two arguments:
//    rps(rps("rock", "paper"), rps("rock", "scissors"))
//    "rock"
// That first expression is evaluated with these two arguments:
//    rps("rock", "paper")
//    rps("rock", "scissors")
// These return:
//    "paper"
//    "rock"
// Which are then passed into the next outermost function call:
//    rps("paper", "rock")
// This returns:
//    "paper"
// Which then gets passed into the outermost function call:
//    rps("paper", "rock")
// This returns:
//    "paper"