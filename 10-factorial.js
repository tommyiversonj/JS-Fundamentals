// Define a recursive function to compute factorial
function factorial(n) {
  if (isNaN(n) || n < 0) {
    return 1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Get the argument and convert it to an integer
const num = parseInt(process.argv[2]);

// Compute and print the factorial
console.log(factorial(num));
