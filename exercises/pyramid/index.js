// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(5)
//       '    #    '
//       '   ###   '
//       '  #####  '
//       ' ####### '
//       '#########'

function pyramid(n) {
  const stringLength = 2 * n - 1;
  const midPoint = Math.floor(stringLength / 2);
  const recursion = (row = 0, word = '') => {
    let stair = word;
    if (row === n) {
      return;
    }
    if (stair.length === stringLength) {
      console.log(stair);
      return recursion(row + 1);
    }
    if (midPoint - row <= stair.length && midPoint + row >= stair.length) {
      stair += '#';
    } else {
      stair += ' ';
    }
    recursion(row, stair);
  };
  recursion();
}

module.exports = pyramid;

// function pyramid(n) {
//     const stringLength = 1 + (n - 1) * 2;
//     const midPoint = Math.floor(stringLength / 2);
//     for (let row = 0; row < n; row++) {
//       let stair = '';
//       for (let col = 0; col < stringLength; col++) {
//         if (midPoint + row >= col && midPoint - row <= col) {
//           stair += '#';
//         } else {
//           stair += ' ';
//         }
//       }
//       console.log(stair);
//     }
//   }

// function pyramid(n) {
//     const space = ' ';
//     const syntax = '#';
//     const stringLength = 1 + (n - 1) * 2;
//     for (let text = 1; text <= n; text++) {
//       const syntaxLength = 1 + (text - 1) * 2;
//       const spaceLength = (stringLength - syntaxLength) / 2;
//       console.log(
//         space.repeat(spaceLength) +
//           syntax.repeat(syntaxLength) +
//           space.repeat(spaceLength)
//       );
//     }
//   }
