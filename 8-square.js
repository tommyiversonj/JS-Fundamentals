// Get the first argument and convert it to an integer
const size = parseInt(process.argv[2]);

// Check if the size is a valid number
if (isNaN(size)) {
  console.log('Missing size');
} else {
  // Loop to print each row of the square
  for (let i = 0; i < size; i++) {
    // Print a row of 'X' repeated 'size' times
    console.log('X'.repeat(size));
  }
}

