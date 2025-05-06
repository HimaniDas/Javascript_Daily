//Read three integers and sort them in ascending order. After, print these values in ascending order, a blank line and then the values in the sequence as they were readed.

//Input
//The input contains three integer numbers.

//Output
//Present the output as requested above.

//Input Sample	
//7 21 -14
//Output Sample
//-14
//7
//21

//7
//21
//-14
var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let numbers = lines[0].split(' ').map(Number);

let original = [...numbers]; // Copy for original order, //This makes a copy of the original array using the spread operator ... We need this because we will sort numbers but still want to remember the original order.
let sorted = [...numbers].sort((a, b) => a - b); // Ascending sort, We again use the spread operator to avoid changing the original. .sort((a, b) => a - b) sorts the array numerically in ascending order. Without (a, b) => a - b, JavaScript sorts alphabetically by default, which wouldn't work for numbers.

sorted.forEach(num => console.log(num));//Prints each number in the sorted array, one per line.

console.log('');//Prints a blank line, as required by the problem.

original.forEach(num => console.log(num)); //Prints the original numbers in the order they were input.original is an array like [7, 21, -14] (the numbers the user typed in).num => console.log(num) is a callback function that takes each element (num) and prints it using console.log.



//forEach is a built-in array method in JavaScript that allows you to loop through each element in an array and do something with it.