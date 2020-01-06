// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //   const arrayString = str.split('');
  //   const reverseArray = arrayString.reverse();
  //   const results = reverseArray.join('');
  //   return results;
  // let string = '';
  // str.split('').map(item => {
  //   string = item + string;
  // });
  // return string;
  return str.split('').reduce((result, item) => {
    return item + result;
  }, '');
}

module.exports = reverse;
