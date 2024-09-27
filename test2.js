let greeting = (name) => {
  setTimeout(() => {
    return "Hi " + name;
  },3000);
};

let result = greeting("Turtle")

console.log(result)

// How long will it take for the "Hi Turtle" message to reach the console?
