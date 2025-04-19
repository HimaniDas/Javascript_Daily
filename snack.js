//Using the following table, write a program that reads a code and the amount of an item. After, print the value to pay. This is a very simple program with the only intention of practice of selection commands.

//Input
//The input file contains two integer numbers X and Y. X is the product code and Y is the quantity of this item according to the above table.

//Output
//The output must be a message "Total: R$ " followed by the total value to be paid, with 2 digits after the decimal point.

//Input Sample	
//3 2
//Output Sample
//Total: R$ 10.00

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let [code, quantity] = lines[0].split(' ').map(Number);
let price = 0;

if (code === 1) {
  price = 4.00;
} 
else if (code === 2) {
  price = 4.50;
} 
else if (code === 3) {
  price = 5.00;
} 
else if (code === 4) {
  price = 2.00;
} 
else if (code === 5) {
  price = 1.50;
}

let total = price * quantity;
console.log(`Total: R$ ${total.toFixed(2)}`);