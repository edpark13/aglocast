// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
//   stringB = stringB.replace(/[^\w]/g, "").toLowerCase();
//   if (stringA.length !== stringB.length) {
//     return false;
//   }
//   const mapA = createMap(stringA);
//   const mapB = createMap(stringB);
//   for (letter in mapA) {
//     if (mapA[letter] != mapB[letter]) {
//       return false;
//     }
//   }
//   return true;
// }
//
// function createMap(string) {
//   const letters = {};
//   for (let letter of string) {
//     if (letters[letter]) {
//       letters[letter] += 1;
//     } else {
//       letters[letter] = 1;
//     }
//   }
//   return letters;
// }
