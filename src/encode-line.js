const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 var encodeLine = function (str) {
  const arr = [];
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      arr.push(count + str[i])
      count = 1;
    } else {
      count++;
    }
  }
  let resArr = arr.join('').split('').filter(e=> e !== '1')
  return resArr.join('');
}


module.exports = {
  encodeLine
};
