const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let sum = 0,
      blocked = []
  for(let i = 0; i < matrix.length; i++){
    for(let i1 = 0; i1 < matrix[i].length; i1++){
      if(blocked.indexOf(i1) != -1) continue
      if(!matrix[i][i1]) blocked.push(i1)
      sum += matrix[i][i1]
    }
  }
  return sum
}

module.exports = {
  getMatrixElementsSum
};
