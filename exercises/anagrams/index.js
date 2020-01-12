// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const sortFunction = str => {
    return str
      .split('')
      .sort()
      .join('')
      .toLowerCase();
  };
  const sortA = sortFunction(stringA);
  const sortB = sortFunction(stringB);
  return sortA === sortB;
}

module.exports = anagrams;

// const mapFunction = string => {
//   const array = string.replace(/[^\w]/g, '').toLowerCase();
//   return array.split('').reduce((result, item) => {
//     result[item] = (result[item] || 0) + 1;
//     return result;
//   }, {});
// };

// function anagrams(stringA, stringB) {
//   const charAMap = mapFunction(stringA);
//   const charBMap = mapFunction(stringB);
//   const isEqualMap = Object.keys(charAMap).reduce((result, item) => {
//     return charAMap[item] === charBMap[item];
//   }, false);
//   return stringA.split('').length === stringB.split('').length && isEqualMap;
// }
