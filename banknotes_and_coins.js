//Read a value of floating point with two decimal places. This represents a monetary value. After this, calculate the smallest possible number of notes and coins on which the value can be decomposed. The considered notes are of 100, 50, 20, 10, 5, 2. The possible coins are of 1, 0.50, 0.25, 0.10, 0.05 and 0.01. Print the message “NOTAS:” followed by the list of notes and the message “MOEDAS:” followed by the list of coins.

//Input
//The input file contains a value of floating point N (0 ≤ N ≤ 1000000.00).

//Output
//Print the minimum quantity of banknotes and coins necessary to change the initial value, as the given example.

//Input Sample	
//576.73
//Output Sample
//NOTAS:
//5 nota(s) de R$ 100.00
//1 nota(s) de R$ 50.00
//1 nota(s) de R$ 20.00
//0 nota(s) de R$ 10.00
//1 nota(s) de R$ 5.00
//0 nota(s) de R$ 2.00
//MOEDAS:
//1 moeda(s) de R$ 1.00
//1 moeda(s) de R$ 0.50
//0 moeda(s) de R$ 0.25
//2 moeda(s) de R$ 0.10
//0 moeda(s) de R$ 0.05
//3 moeda(s) de R$ 0.01

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let amount = parseFloat(lines[0]);
console.log("NOTAS:");

const notes = [100, 50, 20, 10, 5, 2];
for (let i = 0; i < notes.length; i++) {
    let count = Math.floor(amount / notes[i]);
    amount = amount - (count * notes[i]);
    console.log(`${count} nota(s) de R$ ${notes[i].toFixed(2)}`);
}

// After handling notes, only the coin part remains
//amount = parseFloat(amount.toFixed(2)); 
console.log("MOEDAS:");

const coins = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01];
for (let i = 0; i < coins.length; i++) {
    let count = Math.floor(amount / coins[i]);
    amount = amount - (count * coins[i]);
    amount = parseFloat(amount.toFixed(2));
    console.log(`${count} moeda(s) de R$ ${coins[i].toFixed(2)}`);
}