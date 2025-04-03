//Make a program that reads 3 integer values and present the greatest one followed by the message "eh o maior". Use the following formula:

//Input
//The input file contains 3 integer values.

//Output
//Print the greatest of these three values followed by a space and the message “eh o maior”.

//Input Samples	
//7 14 106
//Output Samples
//106 eh o maior

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
var [a, b, s] = lines[0].split(" ").map(Number);

let MaiorAB = (a + b + Math.abs(a - b)) / 2; // Find the greater between a and b
let Maior = (MaiorAB + s + Math.abs(MaiorAB - s)) / 2; // Compare with s to get the greatest

console.log(`${Maior} eh o maior`);
