// Get the first user-supplied argument (after the script name)
// process.argv[0] = path to Node.js
// process.argv[1] = path to this script
// process.argv[2] = first argument provided by the user
const arg = process.argv[2];

// Check if the argument is undefined (i.e., not provided by the user)
if (arg === undefined) {
  // If no argument is passed, print "No argument"
  console.log('No argument');
} else {
  // If an argument is passed, print its value
  console.log(arg);
