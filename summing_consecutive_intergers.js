/*Write an algorithm to read a value A and a value N. Print the sum of N numbers from A (inclusive). While N is negative or ZERO, a new N (only N) must be read. All input values are in the same line.

Input
The input contains only integer values, ​​can be positive or negative.

Output
The output contains only an integer value.

Input Sample	
3 2

Output Sample
7
*/

var input = require('fs').readFileSync('input.txt', 'utf8').trim().split(' ').map(Number);

let A = input[0];
let N;

// Find first positive N (skip negatives and zero)
for (let i = 1; i < input.length; i++) {
    if (input[i] > 0) {
        N = input[i];
        break;
    }
}

let sum = 0;
for (let i = 0; i < N; i++) {
    sum += A + i;
}

console.log(sum);
