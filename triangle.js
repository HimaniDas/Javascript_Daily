//Read three point floating values (A, B and C) and verify if is possible to make a triangle with them. If it is possible, calculate the perimeter of the triangle and print the message:

//Perimetro = XX.X

//If it is not possible, calculate the area of the trapezium which basis A and B and C as height, and print the message:
//Area = XX.X

//Input
//The input file has tree floating point numbers.

//Output
//Print the result with one digit after the decimal point.

//Input Sample	
//6.0 4.0 2.0
//Output Sample
//Area = 10.0

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

//A triangle is possible if the sum of any two sides is greater than the third.

//That means:

//A < B + C
//B < A + C
//C < A + B
//If it's a triangle → print Perimeter = X.X

//Else → treat it as a trapezium and calculate:
//Area = ((A + B) * C) / 2
