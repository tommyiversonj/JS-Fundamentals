// Define the function to add two numbers
function add(a, b) {
  return a + b;
}

// Get the first and second arguments and convert to integers
const first = parseInt(process.argv[2]);
const second = parseInt(process.argv[3]);

// Call the add function and print the result
console.log(add(first, second));
