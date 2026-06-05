function greetings (nameArray, jobObject) {
  const fullName = nameArray.join(" ");
  const occupation = jobObject.title + " " + jobObject.occupation;

  return `Hello, ${fullName}! Nice to have a ${occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);