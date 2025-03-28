//Read four integer values named A, B, C and D. Calculate and print the difference of product A and B by the product of C and D (A * B - C * D).

//Input
//The input file contains 4 integer values.

//Output
//Print DIFERENCA (DIFFERENCE in Portuguese) with all the capital letters, according to the following example, with a blank space before and after the equal signal.

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let A = parseInt(lines[0]);
let B = parseInt(lines[1]);
let C = parseInt(lines[2]);
let D = parseInt(lines[3]);
let DIFERENCA = (A*B-C*D);
console.log(`DIFERENCA = ${DIFERENCA}`);