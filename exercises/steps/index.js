// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';
//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }

function steps(n) {
  function functionStair(row = 0, word = '') {
    let stair = word;
    if (row === n) {
      return;
    }
    if (stair.length === n) {
      console.log(stair);
      return functionStair(row + 1);
    }
    if (stair.length <= row) {
      stair += '#';
    } else {
      stair += ' ';
    }
    functionStair(row, stair);
  }
  functionStair();
}

module.exports = steps;

// function steps(n) {
//     const specialChar = '#';
//     const spacing = ' ';
//     for (let i = 1; i <= n; i++) {
//       console.log(specialChar.repeat(i) + spacing.repeat(n - i));
//     }
//   }
