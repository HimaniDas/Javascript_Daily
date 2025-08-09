/*Your program must read an integer X indefinited times (the program must stop when X is equal to zero). For each X print the sequence from 1 to X, with one space between each one of these numbers.

PS: Be carefull. Don't leave any space after the last number of each line, otherwise you'll get Presentation Error.

Input
The input file contains many integer numbers. The last one is zero.

Output
For each number N of the input file, one output line must be printed, from 1 to N like the following example. Be careful with blank spaces after the last line number.

Input Sample	
5
10
3
0

Output Sample
1 2 3 4 5
1 2 3 4 5 6 7 8 9 10
1 2 3
*/



var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.trim().split('\n').map(Number);

for (let X of lines) {
    if (X == 0) break;// stop when 0 is found

    let line = "";
    for (let i = 1; i <= X; i++) {
        line += i;
        if (i < X) line += " "; // add space only between numbers
    }
    console.log(line);
}
