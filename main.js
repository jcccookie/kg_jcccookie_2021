// Number and phonetic word pairs
const MAP = {
  "0": "Zero",
  "1": "One",
  "2": "Two",
  "3": "Three",
  "4": "Four",
  "5": "Five",
  "6": "Six",
  "7": "Seven",
  "8": "Eight",
  "9": "Nine"
};

const getArgs = () => {
  return process.argv.slice(2);
};

const convertToPhonetic = number => {
  return number.split("").map(digit => MAP[digit]);
};

const numberToWord = numbers => {
  let results = []; // Array to store combined phonetic words

  numbers.forEach(number => {
    // Iterate the string number and get the phonetic word value
    let words = convertToPhonetic(number);
    
    const combinedWord = words.join("");

    results.push(combinedWord);
  });

  return results.join(", ");
};

//////////////////////////////////////////////////////
// Program starts here /////////////////////////////// 
//////////////////////////////////////////////////////

// Get arguments from command line and store them to array as a string
const numbers = getArgs();

// Convert an array of integers into an array of strings representing the phonetic equivalent of the integer
const words = numberToWord(numbers);

// Print out the result on console
console.log(words);
