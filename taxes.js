//In an imaginary country called Lisarb, all the people are very happy to pay their taxes because they know that doesn’t exist corrupt politicians and the taxes are used to benefit the population, without any misappropriation. The currency of this country is Rombus, whose symbol is R$.

//Read a value with 2 digits after the decimal point, equivalent to the salary of a Lisarb inhabitant. Then print the due value that this person must pay of taxes, according to the table below.



//Remember, if the salary is R$ 3,002.00 for example, the rate of 8% is only over R$ 1,000.00, because the salary from R$ 0.00 to R$ 2,000.00 is tax free. In the follow example, the total rate is 8% over R$ 1000.00 + 18% over R$ 2.00, resulting in R$ 80.36 at all. The answer must be printed with 2 digits after the decimal point.

//Input
//The input contains only a float-point number, with 2 digits after the decimal point.

//Output
//Print the message "R$" followed by a blank space and the total tax to be payed, with two digits after the decimal point. If the value is up to 2000, print the message "Isento".

//Input Samples	
//3002.00
//1701.12

//Outputs Samples
//R$ 80.36
//Isento

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let salary = parseFloat(lines[0]);

let tax = 0;

if (salary <= 2000.00) {
    console.log("Isento");
} else {
    if (salary > 2000.00 && salary <= 3000.00) {
        tax = tax + (salary - 2000.00) * 0.08;
    } else if (salary <= 4500.00) {
        tax = tax + (1000.00 * 0.08);
        tax = tax + (salary - 3000.00) * 0.18;
    } else {
        tax = tax + (1000.00 * 0.08);
        tax = tax + (1500.00 * 0.18);
        tax = tax + (salary - 4500.00) * 0.28;
    }
    console.log(`R$ ${tax.toFixed(2)}`);
}

//let tax = 0;

//if (salary <= 2000.00) {
    //console.log("Isento");
//} else {
    //if (salary > 2000.00 && salary <= 3000.00) {
       // tax += (salary - 2000.00) * 0.08; //+= means Take the current value of a variable, add something to it, and save the result back into that variable.
    //} else if (salary <= 4500.00) {
        //tax += (1000.00 * 0.08); // from 2000.01 to 3000.00
        //tax += (salary - 3000.00) * 0.18;
    //} else {
        //tax += (1000.00 * 0.08); // 2000.01 - 3000.00
        //tax += (1500.00 * 0.18); // 3000.01 - 4500.00
        //tax += (salary - 4500.00) * 0.28;
    //}
   // console.log(`R$ ${tax.toFixed(2)}`);
//}


//let tax = 0;
//tax += 10;   // This is the same as: tax = tax + 10;
//console.log(tax);  // Output: 10
//tax += (salary - 2000.00) * 0.08;  Calculate the tax amount on the portion above 2000.00 at 8%, and add it to the current tax value."
//t's shorter and easier to read, especially when you're accumulating values (like a running total).
