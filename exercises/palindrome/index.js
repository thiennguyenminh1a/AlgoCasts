// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str = '') {
  //   const a = str.split('').reduce((result, item) => {
  //     return item + result;
  //   }, '');
  //   return a === str;
  const array = str.split('');
  const a = array.every(
    (item, index) => array[array.length - index - 1] === item
  );
  return a;
}
palindrome();
module.exports = palindrome;
