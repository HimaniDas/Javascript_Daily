//Read an integer value corresponding to a person's age (in days) and print it in years, months and days, followed by its respective message “ano(s)”, “mes(es)”, “dia(s)”.

//Note: only to facilitate the calculation, consider the whole year with 365 days and 30 days every month. In the cases of test there will never be a situation that allows 12 months and some days, like 360, 363 or 364. This is just an exercise for the purpose of testing simple mathematical reasoning.

//Input
//The input file contains 1 integer value.

//Output
//Print the output, like the following example.

//Input Sample
//400
//Output Sample
//1 ano(s)
//1 mes(es)
//5 dia(s)

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let age = parseInt(lines[0]);
let years = Math.floor(age/365);//divide total days by 365 to get full years.
let days = age % 365;//the remaining days after removing the full years.
let months = Math.floor(days/30);//Converts remaining days to months, assuming 30 days per month.
days = days % 30;//Calculates the remaining days after full months.
console.log(`${years} ano(s)`);
console.log(`${months} mes(es)`);
console.log(`${days} dia(s)`);