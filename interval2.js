var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let N = parseInt(lines[0]);
let inCount = 0;
let outCount = 0;

for (let i = 1; i <= N; i++) {
    let X = parseInt(lines[i]);
    if (X >= 10 && X <= 20) {
        inCount++;
    } else {
        outCount++;
    }
}

console.log(`${inCount} in`);
console.log(`${outCount} out`);