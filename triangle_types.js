//Read 3 double numbers (A, B and C) representing the sides of a triangle and arrange them in decreasing order, so that the side A is the biggest of the three sides. Next, determine the type of triangle that they can make, based on the following cases always writing an appropriate message:

//if A ≥ B + C, write the message: NAO FORMA TRIANGULO
//if A2 = B2 + C2, write the message: TRIANGULO RETANGULO
//if A2 > B2 + C2, write the message: TRIANGULO OBTUSANGULO
//if A2 < B2 + C2, write the message: TRIANGULO ACUTANGULO
//if the three sides are the same size, write the message: TRIANGULO EQUILATERO
//if only two sides are the same and the third one is different, write the message: TRIANGULO ISOSCELES
//Input
//The input contains three double numbers, A (0 < A) , B (0 < B) and C (0 < C).

//Output
//Print all the classifications of the triangle presented in the input.

//Input Samples	
//7.0 5.0 7.0
//Output Samples
//TRIANGULO ACUTANGULO
//TRIANGULO ISOSCELES


const input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
// Step 1: Read and convert input to numbers
let [A, B, C] = lines[0].split(' ').map(Number);

// Step 2: Sort in descending order so that A is the largest
let sides = [A, B, C].sort((a, b) => b - a);//sort((a, b) => b - a) sorts the array in descending order.This ensures A is the biggest, as required by the problem.7.0 5.0 7.0 → [7.0, 7.0, 5.0].
A = sides[0];
B = sides[1];
C = sides[2];

// Step 3: Check triangle type
if (A >= B + C) {//If the biggest side is greater than or equal to the sum of the other two, it cannot form a triangle.
  console.log('NAO FORMA TRIANGULO');
} else {
  let A2 = A * A;
  let B2 = B * B;
  let C2 = C * C;

  if (A2 == B2 + C2) {//Uses the Pythagorean Theorem: A² = B² + C²
    console.log('TRIANGULO RETANGULO');
  } 
  else if (A2 > B2 + C2) {//If A² is greater than B² + C², the triangle is obtuse.
    console.log('TRIANGULO OBTUSANGULO');
  } 
  else {
    console.log('TRIANGULO ACUTANGULO');//If A² is less than B² + C², it’s acute.
  }

  if (A == B && B == C) {
    console.log('TRIANGULO EQUILATERO');
  } 
  else if (A == B || A == C || B == C) {
    console.log('TRIANGULO ISOSCELES');
  }
}
