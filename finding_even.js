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