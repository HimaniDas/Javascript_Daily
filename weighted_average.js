//Read an integer N, which represents the number of following test cases. Each test case consists of three floating-point numbers, each one with one digit after the decimal point. Print the weighted average for each of these sets of three numbers, considering that the first number has weight 2, the second number has weight 3 and the third number has weight 5.

//Input
//The input file contains an integer number N in the first line. Each N following line is a test case with three float-point numbers, each one with one digit after the decimal point.

//Output
//For each test case, print the weighted average according with below example.

//Input Sample	
//3
//6.5 4.3 6.2
//5.1 4.2 8.1
//8.0 9.0 10.0
//Output Sample
//5.7
//6.3
//9.3

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
var N = parseInt(lines[0]);

for (let i = 1; i <= N; i++) {
    let [a, b, c] = lines[i].trim().split(' ').map(Number);
    let average = (a * 2 + b * 3 + c * 5) / 10;
    
    console.log(average.toFixed(1));
}
