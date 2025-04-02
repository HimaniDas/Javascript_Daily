var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
const pi = 3.14159;
let R = parseFloat(lines[0]);
let volume = (4/3.0)*pi*R*R*R;
console.log(`VOLUME = ${volume.toFixed(3)}`);