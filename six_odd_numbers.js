//Read an integer value X and print the 6 consecutive odd numbers from X, a value per line, including X if it is the case.

//Input
//The input will be a positive integer value.

//Output
//The output will be a sequence of six odd numbers.

//Input Sample	
//8
//Output Sample
//9
//11
//13
//15
//17
//19
var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
var X = parseInt(lines[0]);

let count = 0;

while (count < 6) {
    if (X % 2 !== 0) {
        console.log(X);
        count++;
    }
    X++;
}