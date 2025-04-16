//Read 4 integer values A, B, C and D. Then if B is greater than C and D is greater than A and if the sum of C and D is greater than the sum of A and B and if C and D were positives values and if A is even, write the message “Valores aceitos” (Accepted values). Otherwise, write the message “Valores nao aceitos” (Values not accepted).

//Input
//Four integer numbers A, B, C and D.

//Output
//Show the corresponding message after the validation of the values​​.

//Input Sample	
//5 6 7 8
//Output Sample
//Valores nao aceitos

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let [A, B, C, D] = lines[0].split(' ').map(Number);
if (
  B > C && // B must be greater than C
  D > A && //D must be greater than A
  (C + D) > (A + B) && // Sum of C and D must be greater than sum of A and B
  C > 0 && // Both C and D must be positive
  D > 0 &&
  A % 2 === 0 //A must be even (because % 2 === 0 means divisible by 2)
) 
{
  console.log("Valores aceitos");
} 
else 
{
  console.log("Valores nao aceitos");
}