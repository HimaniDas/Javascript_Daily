//Read 2 variables, named A and B and make the sum of these two variables, assigning its result to the variable X. Print X as shown below. Print endline after the result otherwise you will get “Presentation Error”.

//Input
//The input file will contain 2 integer numbers.

//Output
//Print the letter X (uppercase) with a blank space before and after the equal signal followed by the value of X, 

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');//lines = [10,9]

console.log("X =", parseInt(lines[0]) + parseInt(lines[1]));
//console.log(`X = ${parseInt(lines[0]) + parseInt(lines[1])}`);