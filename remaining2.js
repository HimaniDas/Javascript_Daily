//Read an integer N. Print all numbers between 1 and 10000, which divided by N will give the rest = 2.

//Input
//The input is an integer N (N < 10000)

//Output
//Print all numbers between 1 and 10000, which divided by n will give the rest = 2, one per line.

//Input Sample	
//13
//Output Sample
//2
//15
//28
//41
//...
var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
var N = parseInt(lines[0]);// Convert input to an integer

for (let i = 1; i <= 10000; i++) {// Loop from 1 to 10000
    if (i % N == 2) {//This checks if dividing i by N leaves a remainder of 2.
        console.log(i);
    }
}