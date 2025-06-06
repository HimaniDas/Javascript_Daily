//Read two integer values X and Y. Print the sum of all odd values between them.

//Input
//The input file contain two integer values.

//Output
//The program must print an integer number. This number is the sum off all odd values between both input values that must fit in an integer number.

//Sample Input	
//6
//-5
//Sample Output
//5
var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let X = parseInt(lines[0]);
let Y = parseInt(lines[1]);

let start = Math.min(X, Y) + 1;
let end = Math.max(X, Y);
let sum = 0;

for (let i = start; i < end; i++) {//The loop runs from the smaller number +1 up to (but not including) the bigger number.
    if (i % 2 !== 0) {//i % 2 !== 0 checks for odd numbers.Adds all odd numbers in that range to sum.
        sum += i;
    }
}

console.log(sum);
