/*Write a program to read the coordinates (X, Y) of an indeterminate number of points in Cartesian system. For each point write the quadrant to which it belongs. The program finish when at least one of two coordinates is NULL (in this situation without writing any message).

Input
The input contains several tests cases. Each test case contains two integer numbers.

Output
For each test case, print the corresponding quadrant which these coordinates belong, as in the example.

Input Sample	
2 2
3 -2
-8 -1
-7 1
0 2
Output Sample
primeiro
quarto
terceiro
segundo
*/

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.trim().split('\n');

for (let i = 0; i < lines.length; i++) {
    let [x, y] = lines[i].split(' ').map(Number);

    if (x == 0 || y == 0) {
        break;
    }

    if (x > 0 && y > 0) 
    {
        console.log("primeiro");
    } 
    else if (x < 0 && y > 0) 
    {
        console.log("segundo");
    } 
    else if (x < 0 && y < 0)    
    {
        console.log("terceiro");
    }
    else if (x > 0 && y < 0) 
    {
        console.log("quarto");
    }
}
