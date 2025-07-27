/* 
A gas station wants to determine which of their products is the preference of their customers. Write a program to read the type of fuel supplied (coded as follows: 1. Alcohol 2. Gasoline 3. Diesel 4. End). If you enter an invalid code (outside the range of 1 to 4) a new code must be requested. The program will end when the inserted code is the number 4.

Input
The input contains only integer and positive values.

Output
It should be written the message: "MUITO OBRIGADO" and the amount of customers who fueled each fuel type, as an example.

Input Sample	
8
1
7
2
2
4

Output Sample
MUITO OBRIGADO
Alcool: 1
Gasolina: 2
Diesel: 0
*/



const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.trim().split('\n').map(Number);

let alcool = 0;
let gasolina = 0;
let diesel = 0;

for (let i = 0; i < lines.length; i++) {
    const code = lines[i];

    if (code == 1) {
        alcool++;
    } else if (code == 2) {
        gasolina++;
    } else if (code == 3) {
        diesel++;
    } else if (code == 4) {
        break;
    }
    
}

console.log("MUITO OBRIGADO");
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);