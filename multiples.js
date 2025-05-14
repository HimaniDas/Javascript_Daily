//Read two integer values (A and B). After, the program should print the message "Sao Multiplos" (are multiples) or "Nao sao Multiplos" (aren’t multiples), corresponding to the read values.

//Input
//The input has two integer numbers.

//Output
//Print the relative message to the input as stated above.

//Input Sample	
//6 24
//6 25
//Sao Multiplos
//Output Sample
//Sao Multiplos
//Nao sao Multiplos

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split(' ');

let A = parseInt(lines[0]);
let B = parseInt(lines[1]);

if (A % B == 0 || B % A == 0) {
    console.log('Sao Multiplos');
} else {
    console.log('Nao sao Multiplos');
}