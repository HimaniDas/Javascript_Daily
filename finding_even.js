//Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.

//Input
//The input will be 5 integer values.

//Output
//Print a message like the following example with all letters in lowercase, indicating how many even numbers were typed.

//Input Sample	
//7
//-5
//6
//-4
//12
//Output Sample
//3 valores pares

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let evenCount = 0;
for (let i = 0; i < 5; i++)
 {
    const num = parseInt(lines[i]);
    if (num % 2 == 0) 
    {
        evenCount++;
    }
}
console.log(`${evenCount} valores pares`);