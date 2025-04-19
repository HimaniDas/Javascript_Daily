var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let [code, quantity] = lines[0].split(' ').map(Number);
let price = 0;

if (code === 1) {
  price = 4.00;
} else if (code === 2) {
  price = 4.50;
} else if (code === 3) {
  price = 5.00;
} else if (code === 4) {
  price = 2.00;
} else if (code === 5) {
  price = 1.50;
}

let total = price * quantity;
console.log(`Total: R$ ${total.toFixed(2)}`);