// Get the first argument and try to convert it to an integer
const x = parseInt(process.argv[2]);

// Check if x is a valid number
if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  // Loop x times and print "C is fun"
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}
