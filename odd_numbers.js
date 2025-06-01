//Read an integer value X (1 <= X <= 1000).  Then print the odd numbers from 1 to X, each one in a line, including X if is the case.

//Input
//The input will be an integer value.

//Output
//Print all odd values between 1 and X, including X if is the case.

//Input Sample	
//8
//Output Sample
//1
//3
//5
//7

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split(' ');
var x = parseInt(lines[0]);

for (let i = 1; i <= x; i++)
{
    if (i % 2 !== 0)//If the number is not divisible by 2, then it is odd
    {
        console.log(i);
    }
}
