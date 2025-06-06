//Read an integer N. This N will be the number of integer numbers X that will be read.

//Print how many these numbers X are in the interval [10,20] and how many values are out of this interval.

//Input
//The first line of input is an integer N (N < 10000), that indicates the total number of test cases.
//Each case is an integer number X (-107 < X < 107).

//Output
//For each test case, print how many numbers are in and how many values are out of the interval.

//Input Sample	
//4
//14
//123
//10
//-25
//Output Sample
//2 in
//2 out

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let N = parseInt(lines[0]);
let inCount = 0;
let outCount = 0;

for (let i = 1; i <= N; i++) {
    let X = parseInt(lines[i]);
    if (X >= 10 && X <= 20) {
        inCount++;
    } else {
        outCount++;
    }
}

console.log(`${inCount} in`);
console.log(`${outCount} out`);