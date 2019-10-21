// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let m = [];
  for (let i = 0; i < n; i++) {
    let arr = new Array(n).fill(0);
    m.push(arr);
  }
  let startRow = 0;
  let startCol = 0;
  let endRow= n - 1;
  let endCol = n - 1;
  let num = 1;
  // first row
  for (i = num; i < num + n; i++) {
    m[startRow][num - 1] = num;
    num += 1
  }
  // last endCol
  for (i = num; i < num + n; i++)
}

matrix(3);

module.exports = matrix;
