const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if(!(Array.isArray(arr))) throw new Error('\'arr\' parameter must be an instance of the Array!')
  let thisArr = [...arr]
  for(let i = 0; i < thisArr.length; i++){
    let tmp = true
    if(thisArr[i] === '--discard-next') {
      thisArr.splice(i, i < thisArr.length - 1 ? 2 : 1)
      tmp = false
    }
    if(thisArr[i] === '--discard-prev') thisArr.splice(i - (i && tmp ? 1 : 0), i && tmp ? 2 : 1)
    if(thisArr[i] === '--double-next') i < thisArr.length - 1 ? thisArr[i] = thisArr[i + 1] : thisArr.splice(i, 1)
    if(thisArr[i] === '--double-prev') i && tmp ? thisArr[i] = thisArr[i - 1] : thisArr.splice(i, 1)
  }
  return thisArr
}


module.exports = {
  transform
};
