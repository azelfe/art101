// index.js - purpose and description here
// Author: Taylor Wedaa
// Date: April 28th, 2023

var numArray = [1, 2, 3, 4, 5];
function multiply(x) {
    return x * x;
}
//test function
console.log(multiply(5));
//25
console.log(multiply(4));
//64

var multipledArray = numArray.map(multiply);
console.log(multiply);
//should return (5) [1, 4, 9, 16, 25]

var numbersPlusOne = numArray.map(function(num) {
  return num + 1;
});
console.log(numbersPlusOne);
//should return (5) [2, 3, 4, 5, 6]