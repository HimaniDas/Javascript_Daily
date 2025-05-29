//Write a program that prints all even numbers between 1 and 100, including them if it is the case.

//Input
//in this extremely simple problem there is no input.

//Output
//Print all even numbers between 1 and 100, including them, one by row.

//var input = require('fs').readFileSync('input.txt', 'utf8');
//var lines = input.split('\n');
//for (let i = 2; i <= 100; i += 2) {  //x += y//x = x + y
    //console.log(i);
//}
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}