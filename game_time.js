var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let [start, end] = lines[0].split(' ').map(Number);//This splits the input string into two parts: "16" and "2", then converts them to numbers.

let duration;

if (start < end) {//If start is before end, subtract normally.If the game went overnight (start >= end), calculate the wrap-around.
    duration = end - start;
} else {
    duration = 24 - start + end;
}

console.log(`O JOGO DUROU ${duration} HORA(S)`);