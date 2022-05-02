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
 function renameFiles(filePath) {
  fs.readFile(resolve(__dirname, filePath), 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      if (entries.length) {
        entries.forEach(async ({ from, to }) => {
          let result = await data.replaceAll(from, to);
          fs.writeFile(
            resolve(__dirname, filePath),
            result,
            'utf8',
            function (err) {
              if (err) return console.log(err);
            }
          );
        });
      }
    }
  });
}
module.exports = {
  renameFiles
};
