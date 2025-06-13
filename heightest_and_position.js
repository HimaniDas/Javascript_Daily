//Read 100 integer numbers. Print the highest read value and the input position.

//Input
//The input file contains 100 distinct positive integer numbers.

//Output
//Print the highest number read and the input position of this value, according to the given example.

//Input Sample	
//2
//113
//45
//34565
//6
//...
//8
 
//Output Sample
//34565
//4
var input = require('fs').readFileSync('input.txt', 'utf8');
const lines = input.trim().split('\n').map(Number);
let max = lines[0];
let pos = 1;

for (let i = 1; i < 100; i++) {
    if (lines[i] > max) {
        max = lines[i];
        pos = i + 1; // +1 because position is 1-based
    }
}

console.log(max);
console.log(pos);

//input.trim()
//Removes any extra whitespace or newlines from the start and end of the input.

//.split('\n')
//Splits the whole input string into an array, separating values by each new line.

//.map(Number)
//Converts each element (which is a string) into a number using Number().