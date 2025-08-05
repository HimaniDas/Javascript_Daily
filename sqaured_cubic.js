/*Write a program that reads an integer N (1 < N < 1000). This N is the number of output lines printed by this program.

Input
The input file contains an integer N.

Output
Print the output according to the given example.

Input Sample	
5

Output Sample
1 1 1
2 4 8
3 9 27
4 16 64
5 25 125
*/

var input = require('fs').readFileSync('input.txt', 'utf8');
var N = parseInt(input.trim());

for (let i = 1; i <= N; i++) {
    console.log(`${i} ${i * i} ${i * i * i}`);
}