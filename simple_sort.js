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