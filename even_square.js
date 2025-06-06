//Read an integer N. Print the square of each one of the even values from 1 to N including N if it is the case.

//Input
//The input contains an integer N (5 < N < 2000).

//Output
//Print the square of each one of the even values from 1 to N, as the given example.

//Be carefull! Some language automaticly print 1e+006 instead 1000000. Please configure your program to print the correct format setting the output precision.

//Input Sample	
//6
//Output Sample
//2^2 = 4
//4^2 = 16
//6^2 = 36
var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
var N = parseInt(lines[0]);

for (let i = 1; i <= N; i++) { // Loop through numbers from 1 to N
    
    if (i % 2 == 0) {// Check if the number is even
        
        console.log(i + '^2 = ' + (i * i));// Print the number and its square in the required format
    }
}