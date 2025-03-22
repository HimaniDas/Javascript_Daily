//The formula to calculate the area of a circumference is defined as A = π . R2. Considering to this problem that π = 3.14159:

//Calculate the area using the formula given in the problem description.

//Input
//The input contains a value of floating point (double precision), that is the variable R.

//Output
//Present the message "A=" followed by the value of the variable, as in the example bellow, with four places after the decimal point. Use all double precision variables. 

var input = require('fs').readFileSync('input.txt', 'utf8');//Reads input from input.txt → fs.readFileSync('input.txt', 'utf8')
var R = parseFloat(input.trim()); // Read and parse input as a floating-point number
                                 //Trims extra spaces/newlines → input.trim()
                                 //Parses input as a float → parseFloat(input)
var π = 3.14159;
var area = π * R * R;//Calculates area → π * R * R

console.log(`A=${area.toFixed(4)}`); // Format output to 4 decimal places
                                    //Formats output correctly → .toFixed(4) ensures exactly 4 decimal places
