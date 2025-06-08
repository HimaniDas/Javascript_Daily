//Read an integer value N. After, read these N values and print a message for each value saying if this value is odd, even, positive or negative. In case of zero (0), although the correct description would be "EVEN NULL", because by definition zero is even, your program must print only "NULL", without quotes.

//Input
//The first line of input is an integer N (N < 10000), that indicates the total number of test cases. Each case is a integer number X (-107 < X <107)..

//Output
//For each test case, print a corresponding message, according to the below example. All messages must be printed in uppercase letters and always will have one space between two words in the same line.

//Input Sample	
//4
//-5
//0
//3
//-4
//Output Sample
//ODD NEGATIVE
//NULL
//ODD POSITIVE
//EVEN NEGATIVE

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);// The first line tells how many numbers to process

for (let i = 1; i <= N; i++) {// Loop through the next N lines
    let num = parseInt(lines[i]);

    if (num == 0) {
        console.log("NULL");
    } else {
        let type = (num % 2 == 0) ? "EVEN" : "ODD";
        let sign = (num > 0) ? "POSITIVE" : "NEGATIVE";
        console.log(`${type} ${sign}`);
    }
}
