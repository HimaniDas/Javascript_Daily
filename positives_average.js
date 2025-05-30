//Read 6 values that can be floating point numbers. After, print how many of them were positive. In the next line, print the average of all positive values typed, with one digit after the decimal point.

//Input
//The input consist in 6 numbers that can be integer or floating point values. At least one number will be positive.

//Output
//The first output value is the amount of positive numbers. The next line should show the average of the positive values ​typed.

//Input Sample	
//7
//-5
//6
//-3.4
//4.6
//12
//Output Sample
//4 valores positivos
//7.4
var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let count = 0;
let sum = 0;

for (let i = 0; i < 6; i++) {
    const num = parseFloat(lines[i]);
    if (num > 0) {
        count++;
        sum += num;
    }
}

console.log(`${count} valores positivos`);
console.log((sum / count).toFixed(1));