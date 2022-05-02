const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let arr = [...names],
      done = 1
  while (done) {
      let tmpArr = []
      done = 0
      for (let i = 0; i < arr.length; i++) {
          let count = 0
          for (let i1 = 0; i1 < i; i1++) {
              if (arr[i] == arr[i1]) count++
          }
          if (count) done = 1
          tmpArr.push(arr[i] + (count ? `(${count})` : ''))
      }
      arr = [...tmpArr]
  }
  return arr
}

module.exports = {
  renameFiles
};
