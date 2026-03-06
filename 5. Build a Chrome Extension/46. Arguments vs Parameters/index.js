// What are greeting and name?
// What are "Howdy" and "James"?
// What are num1 and num2? Parameters
// What are 3 and 4? Arguements

//.                parameters
function greetUser(greeting, name) {
  welcomeEl.textContent = `${greeting}, ${name} 👋`;
}

//.        arguments
let hi = "Howdy";
greetUser(hi, "James");

function add(num1, num2) {
  return num1 + num2;
}

add(3, 4);
