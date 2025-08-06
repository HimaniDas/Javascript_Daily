/*Write an program that reads two numbers X and Y (X < Y). After this, show a sequence of 1 to y, passing to the next line to each X numbers.

Input
The input contains two integer numbers X (1 < X < 20) and Y (X < Y < 100000).

Output
Each sequence must be printed in one line, with a blank space between each number, like the following example.

Input Sample	Output Sample
3 99

1 2 3
4 5 6
7 8 9
10 11 12
...
97 98 99
*/

var input = require('fs').readFileSync('input.txt', 'utf8');
var [X, Y] = input.trim().split(' ').map(Number);

let output = "";

for (let i = 1; i <= Y; i++) {
    output += i; // add current number

    if (i % X === 0 || i === Y) {
        output += "\n"; // break line after X numbers or at the last number
    } else {
        output += " "; // add space otherwise
    }
}

console.log(output.trim());
