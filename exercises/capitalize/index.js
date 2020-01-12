// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const arrayString = str.split('');
  return arrayString
    .map((item, index) => {
      if (arrayString[index - 1] === ' ' || index === 0) {
        return item.toUpperCase();
      }
      return item;
    })
    .join('');
}

module.exports = capitalize;

// function capitalize(str) {
//     const array = str.split(' ').map(item => {
//       const newItem = item[0].toUpperCase() + item.slice(1);
//       return newItem;
//     });
//     return array.join(' ');
//   }
