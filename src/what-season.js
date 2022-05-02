const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if(!arguments.length) return 'Unable to determine the time of year!'
  try {date.getTimezoneOffset()
    const monthNumber = date.getMonth()
    if(monthNumber > 10 || monthNumber < 2) return 'winter'
    if(monthNumber > 1 && monthNumber < 5) return 'spring'
    if(monthNumber > 4 && monthNumber < 8) return 'summer'
    if(monthNumber > 7 && monthNumber < 11) return 'fall'
  }
  catch(e){throw new Error('Invalid date!')}
}
module.exports = {
  getSeason
};
