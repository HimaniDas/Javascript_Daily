/*
Write a program that reads an integer N. N * 2 lines must be printed by this program according to the example below. For numbers with more than 6 digits, all digits must be printed (no cientific notation allowed).

Input
The input file contains an integer N (1 < N < 1000).

Output
Print the output according to the given example.

Input Sample	
5

Output Sample
1 1 1
1 2 2
2 4 8
2 5 9
3 9 27
3 10 28
4 16 64
4 17 65
5 25 125
5 26 
*/


var input = require('fs').readFileSync('input.txt', 'utf8');
var N = parseInt(input.trim());

for (let i = 1; i <= N; i++) {
    
    console.log(`${i} ${i * i} ${i * i * i}`);
    
    console.log(`${i} ${i * i + 1} ${i * i * i + 1}`);
}
