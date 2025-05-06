var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let [A, B, C] = lines[0].split(' ').map(Number);

if (A < B + C && B < A + C && C < A + B) {
    // Triangle is possible
    let perimeter = A + B + C;
    console.log(`Perimetro = ${perimeter.toFixed(1)}`);
} else {
    // Not a triangle, calculate trapezium area
    let area = ((A + B) * C) / 2;
    console.log(`Area = ${area.toFixed(1)}`);
}