//Read 3 floating-point numbers. After, print the roots of bhaskara’s formula. If it's impossible to calculate the roots because a division by zero or a square root of a negative number, presents the message “Impossivel calcular”.

//Input
//Read 3 floating-point numbers (double) A, B and C.

//Output
//Print the result with 5 digits after the decimal point or the message if it is impossible to calculate.

//Input Samples	
//10.0 20.1 5.1
//Output Samples
//R1 = -0.29788
//R2 = -1.71212

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let [A, B, C] = lines[0].split(' ').map(Number);
let delta = B * B - 4 * A * C;
if (A == 0 || delta < 0) {
    console.log('Impossivel calcular');
} 
else {
    const R1 = (-B + Math.sqrt(delta)) / (2 * A);
    const R2 = (-B - Math.sqrt(delta)) / (2 * A);
    console.log(`R1 = ${R1.toFixed(5)}`);
    console.log(`R2 = ${R2.toFixed(5)}`);
}