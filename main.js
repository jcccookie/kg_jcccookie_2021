const { getArgs, numberToWord } = require('./function');

//////////////////////////////////////////////////////
// Program starts here /////////////////////////////// 
//////////////////////////////////////////////////////

// Get arguments from command line and store them to array as a string
const numbers = getArgs();

// Convert an array of integers into an array of strings representing the phonetic equivalent of the integer
const words = numberToWord(numbers);

// Print out the result on console
console.log(words);
