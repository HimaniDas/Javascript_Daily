var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
var [a, b, s] = lines[0].split(" ").map(Number);

let MaiorAB = (a + b + Math.abs(a - b)) / 2; // Find the greater between a and b
let Maior = (MaiorAB + s + Math.abs(MaiorAB - s)) / 2; // Compare with s to get the greatest

console.log(`${Maior} eh o maior`);
