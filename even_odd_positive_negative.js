//Make a program that reads five integer values. Count how many   of these values are even, odd, positive and negative. Print these information like following example.

//Input
//The input will be 5 integer values.

//Output
//Print a message like the following example with all letters in lowercase, indicating how many of these values ​​are even, odd, positive and negative.

//Input Sample	
//-5
//0
//-3
//-4
//12
//Output Sample
//3 valor(es) par(es)
//2 valor(es) impar(es)
//1 valor(es) positivo(s)
//3 valor(es) negativo(s)

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let even = 0;
let odd = 0;
let positive = 0;
let negative = 0;

for (let i = 0; i < 5; i++) {
    const num = parseInt(lines[i]);

    if (num % 2 == 0) {
        even++;
    } else {
        odd++;
    }

    if (num > 0) {
        positive++;
    } else if (num < 0) {
        negative++;
    }
}

console.log(`${even} valor(es) par(es)`);
console.log(`${odd} valor(es) impar(es)`);
console.log(`${positive} valor(es) positivo(s)`);
console.log(`${negative} valor(es) negativo(s)`);