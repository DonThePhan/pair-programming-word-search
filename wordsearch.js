const wordSearch = (matrix, word) => {
  // CREATE ARRAY of texts of each ROW
  const horizontalJoin = matrix.map((ls) => ls.join(''));

  // CREATE ARRAY of texts of each COLUMN:
  // 1. create array of EMPTY cells for each column
  let verticalJoin = [];
  for (let col of matrix[0]) {
    verticalJoin.push('');
  }
  // 2. fill in the empty cells
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      verticalJoin[col] += matrix[row][col];
    }
  }

  // Check Horizontal Array for matching word (forward & reverse cases)
  for (let string of horizontalJoin) {
    if (string.includes(word)) return true;
    if (string.split('').reverse().join('').includes(word)) return true; // reverse case
  }

  // Check Vertical Array for matching word (forward & reverse cases)
  for (let string of verticalJoin) {
    if (string.includes(word)) return true;
    if (string.split('').reverse().join('').includes(word)) return true; // reverse case
  }

  return false; // if no matches found
};

module.exports = wordSearch;
