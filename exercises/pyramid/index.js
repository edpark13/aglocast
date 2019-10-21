// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row=0, level='') {
  if (n === row) {
    return;
  }
  if (2 * n - 1 === level.length) {
    console.log(level);
    pyramid(n, row + 1);
    return;
  }
  const mid = Math.floor((2 * n - 1) / 2);
  if (level.length >= mid - row && level.length <= mid + row) {
    level += '#';
  } else {
    level += ' ';
  }
  pyramid(n, row, level);
}

module.exports = pyramid;

// function pyramid(n) {
//   const num_of_col = 2 * n - 1;
//   const mid = Math.floor(num_of_col / 2);
//   for (let r = 0; r < n; r++) {
//     let level = '';
//     for (let c = 0; c < num_of_col; c++) {
//       if (c >= mid - r && c <= mid + r) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }
