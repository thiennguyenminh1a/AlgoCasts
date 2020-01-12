// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = str.split('').reduce((result, item) => {
    result[item] = result[item] || 0 + 1;
    return result;
  }, {});
  const charMapKey = Object.keys(charMap);
  const max = charMapKey.reduce(
    (result, item) => {
      if (charMap[item] > result.max) {
        result.max = charMap[item];
        result.char = item;
      }
      return result;
    },
    { max: 0, char: '' }
  );

  return max.char;
}

module.exports = maxChar;
