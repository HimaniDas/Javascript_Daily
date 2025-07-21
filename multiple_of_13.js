/*Write a program that reads two integer numbers X and Y and calculate the sum of all number not divisible by 13 between them, including both.

Input
The input file contains 2 integer numbers X and Y without any order.

Output
Print the sum of all numbers between X and Y not divisible by 13, including them if it is the case.

Input Sample	
100
200

Output Sample
13954
*/

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n').map(Number);

let x = input[0];
let y = input[1];

if (x > y) {
    [x, y] = [y, x];
}

let sum = 0;

for (let i = x; i <= y; i++) {
    if (i % 13 !== 0) {
        sum += i;
    }
}

console.log(sum);
