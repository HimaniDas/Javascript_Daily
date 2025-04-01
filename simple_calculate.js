//In this problem, the task is to read a code of a product 1, the number of units of product 1, the price for one unit of product 1, the code of a product 2, the number of units of product 2 and the price for one unit of product 2. After this, calculate and show the amount to be paid.

//Input
//The input file contains two lines of data. In each line there will be 3 values: two integers and a floating value with 2 digits after the decimal point.

//Output
//The output file must be a message like the following example where "Valor a pagar" means Value to Pay. Remember the space after ":" and after "R$" symbol. The value must be presented with 2 digits after the point.

//Input Samples
//12 1 5.30
//6 2 5.10
// 	Output Samples
//VALOR A PAGAR: R$ 15.50

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');


var [itemId1, quantity1, unitPrice1] = lines.shift().split(" ");
var [itemId2, quantity2, unitPrice2] = lines.shift().split(" ");

quantity1 = parseInt(quantity1);
unitPrice1 = parseFloat(unitPrice1);

quantity2 = parseInt(quantity2);
unitPrice2 = parseFloat(unitPrice2);

var totalPriceItem1 = quantity1 * unitPrice1;
var totalPriceItem2 = quantity2 * unitPrice2;

var totalPurchasePrice = totalPriceItem1 + totalPriceItem2;
console.log("VALOR A PAGAR: R$ " + totalPurchasePrice.toFixed(2));



