//Read an integer number between 1 and 12, including. Corresponding to this number, you must print the month of the year, in english, with the first letter in uppercase.

//Input
//The input contains only an integer number.

///Output
//Print the name of the month according to the input number, with the first letter in uppercase.

//Input Sample	
//4
//Output Sample
//April

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let monthNumber = parseInt(lines[0]);

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

console.log(months[monthNumber - 1]);//Arrays start at index 0, but month numbers start at 1, so subtract 1. If the input is 4, then months[4 - 1] is months[3], which is "April"