// Get the command-line arguments, excluding the first two default entries:
// process.argv[0] -> Node.js path
// process.argv[1] -> script file path
// process.argv[2...] -> actual user-supplied arguments
const args = process.argv.slice(2);

// Check how many arguments the user passed
if (args.length === 0) {
  // No arguments provided
  console.log('No argument');
} else if (args.length === 1) {
  // Only one argument provided
  console.log('Argument found');
} else {
  // Two or more arguments provided
  console.log('Arguments found');
}

