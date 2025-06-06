var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
var N = parseInt(lines[0]);

for (let i = 1; i <= N; i++) { // Loop through numbers from 1 to N
    
    if (i % 2 == 0) {// Check if the number is even
        
        console.log(i + '^2 = ' + (i * i));// Print the number and its square in the required format
    }
}