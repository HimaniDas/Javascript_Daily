//Read three integers and sort them in ascending order. After, print these values in ascending order, a blank line and then the values in the sequence as they were readed.

//Input
//The input contains three integer numbers.

//Output
//Present the output as requested above.

//Input Sample	
//7 21 -14
//Output Sample
//-14
//7
//21

//7
//21
//-14
var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let numbers = lines[0].split(' ').map(Number);

let original = [...numbers]; // Copy for original order
let sorted = [...numbers].sort((a, b) => a - b); // Ascending sort

// Print sorted numbers
sorted.forEach(num => console.log(num));

// Print blank line
console.log('');

// Print original numbers
original.forEach(num => console.log(num));