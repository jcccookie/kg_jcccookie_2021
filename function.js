const { MAP } = require('./map');

exports.getArgs = () => {
  return process.argv.slice(2);
};

const convertToPhonetic = number => {
  return number.split("").map(digit => MAP[digit]);
};

exports.numberToWord = numbers => {
  let results = []; // Array to store combined phonetic words

  numbers.forEach(number => {
    // Iterate the string number and get the phonetic word value
    let words = convertToPhonetic(number);
    
    const combinedWord = words.join("");

    results.push(combinedWord);
  });

  return results.join(", ");
};