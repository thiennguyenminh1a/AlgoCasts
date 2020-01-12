// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (var i = 1; i <= n; i++) {
    const isMutipleByThere = i % 3 === 0;
    const isMutipleByFive = i % 5 === 0;
    if (isMutipleByThere && isMutipleByFive) {
      console.log('fizzbuzz');
    } else if (isMutipleByThere) {
      console.log('fizz');
    } else if (isMutipleByFive) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;
