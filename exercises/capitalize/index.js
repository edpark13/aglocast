// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    let letter = str[i];
    if (str[i - 1] === ' ') {
      letter = letter.toUpperCase();
    }
    result += letter;
  }
  return result;
}

module.exports = capitalize;

// function capitalize(str) {
//   const array = str.split(" ");
//   console.log(array);
//   for (var i=0; i < array.length; i++) {
//     let word = array[i];
//     array[i] = word[0].toUpperCase() + word.slice(1);
//   }
//   return array.join(' ');
// }

// function capitalize(str) {
//   const words = [];
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(' ');
// }
