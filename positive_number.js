//Write a program that reads 6 numbers. These numbers will only be positive or negative (disregard null values). Print the total number of positive numbers.

//Input
//Six numbers, positive and/or negative.

//Output
//Print a message with the total number of positive numbers.

//Input Sample	
//7
//-5
//6
//-3.4
//4.6
//12
//Output Sample
//4 valores positivos

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let count = 0;
for (let i = 0; i < 6; i++) {
    let num = parseFloat(lines[i]);
    if (num > 0) {
        count++;
    }
}

console.log(`${count} valores positivos`);