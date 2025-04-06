var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let [x1,y1] = lines[0].split(" ").map(Number);
let [x2,y2] = lines[1].split(" ").map(Number);
let distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
console.log(`${distance.toFixed(4)}`);