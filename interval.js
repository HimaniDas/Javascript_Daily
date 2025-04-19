//You must make a program that read a float-point number and print a message saying in which of following intervals the number belongs: [0,25] (25,50], (50,75], (75,100]. If the read number is less than zero or greather than 100, the program must print the message “Fora de intervalo” that means "Out of Interval".

    //The symbol '(' represents greather than. For example:
    //[0,25] indicates numbers between 0 and 25.0000, including both.
    //(25,50] indicates numbers greather than 25 (25.00001) up to 50.0000000.
    
    //Input
    //The input file contains a floating-point number.
    
    //Output
    //The output must be a message like following example.
    
    //Input Sample	Output Sample
    //25.01
    //Output Sample
    //Intervalo (25,50]


var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let number = parseFloat(lines[0]);

if (number < 0 || number > 100) {
  console.log("Fora de intervalo");
} else if (number >= 0 && number <= 25) {
  console.log("Intervalo [0,25]");
} else if (number > 25 && number <= 50) {
  console.log("Intervalo (25,50]");
} else if (number > 50 && number <= 75) {
  console.log("Intervalo (50,75]");
} else if (number > 75 && number <= 100) {
  console.log("Intervalo (75,100]");
}