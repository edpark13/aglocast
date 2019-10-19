// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  for (var i = 0; i < array.length; i+=size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
}

module.exports = chunk;

// function chunk(array, size) {
//   const result = [];
//   let arr = [];
//   for (var i of array) {
//     if (arr.length === size) {
//       result.push(arr);
//       arr = [i];
//     } else {
//       arr.push(i);
//     }
//   }
//   result.push(arr);
//   return result;
// }

// function chunk(array, size) {
//   const chunked = [];
//   for (let i of array) {
//     const chunk = chunked[chunked.length - 1];
//     if (!chunk || chunk.length === size) {
//       chunked.push([i]);
//     } else {
//       chunk.push(i);
//     }
//   }
//   return chunked
// }
