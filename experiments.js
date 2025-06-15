//Maria has just started as graduate student in a medical school and she's needing your help to organize a laboratory experiment which she is responsible about. She wants to know, at the end of the year, how many animals were used in this laboratory and the percentage of each type of animal is used at all.

//This laboratory uses in particular three types of animals: frogs, rats and rabbits. To obtain this information, it knows exactly the number of experiments that were performed, the type and quantity of each animal is used in each experiment.

//Input
//The first line of input contains an integer N indicating the number of test cases that follows. Each test case contains an integer Amount (1 ≤ Amount ≤ 15) which represents the amount of animal used and a character Type ('C', 'R' or 'S'), indicating the type of animal:
//- C: Coelho (rabbit in portuguese)
//- R: Rato (rat  in portuguese)
//- S: Sapo (frog in portuguese)

//Output
//Print the total of animals used, the total of each type of animal and the percentual of each one in relation of the total of animals used. The percentual must be printed with 2 digits after the decimal point.

//Input Sample	
//10
//10 C
//6 R
//15 S
//5 C
//14 R
//9 C
//6 R
//8 S
//5 C
//14 R
//Output Sample
//Total: 92 cobaias
//Total de coelhos: 29
//Total de ratos: 40
//Total de sapos: 23
//Percentual de coelhos: 31.52 %
//Percentual de ratos: 43.48 %
//Percentual de sapos: 25.00 %
var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.trim().split('\n');

let testCount = parseInt(lines[0]);
let total = 0;
let rabbits = 0;
let rats = 0;
let frogs = 0;

for (let i = 1; i <= testCount; i++) {
    let [amountStr, type] = lines[i].trim().split(' ');
    let amount = parseInt(amountStr);

    total += amount;
    if (type == 'C') 
    {
        rabbits += amount;
    } else if (type == 'R') 
    {
        rats += amount;
    } else if (type == 'S') 
    {
        frogs += amount;
    }
}

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${rabbits}`);
console.log(`Total de ratos: ${rats}`);
console.log(`Total de sapos: ${frogs}`);

console.log(`Percentual de coelhos: ${(rabbits * 100 / total).toFixed(2)} %`);
console.log(`Percentual de ratos: ${(rats * 100 / total).toFixed(2)} %`);
console.log(`Percentual de sapos: ${(frogs * 100 / total).toFixed(2)} %`);