var input = require('fs').readFileSync('input.txt', 'utf8').trim().split(' ').map(Number);

let A = input[0];
let N;

// Find first positive N (skip negatives and zero)
for (let i = 1; i < input.length; i++) {
    if (input[i] > 0) {
        N = input[i];
        break;
    }
}

let sum = 0;
for (let i = 0; i < N; i++) {
    sum += A + i;
}

console.log(sum);
