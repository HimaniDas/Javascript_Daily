/*Read an integer N that is the number of test cases. Each test case is a line containing two integer numbers X and Y. Print the sum of all odd values between them, not including X and Y.

Input
The first line of input is an integer N that is the number of test cases that follow. Each test case is a line containing two integer X and Y.

Output
Print the sum of all odd numbers between X and Y.

Input Sample	
7

4 5

13 10

6 4

3 3

3 5

3 4

3 8

Output Sample
0

11

5

0

0

0

12
Each test case gives x and y.

If x > y, swap to keep x < y.

Loop from x + 1 to y - 1, and add if the number is odd.
*/


var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines[0]);

for (let i = 1; i <= n; i++) {
    let [x, y] = lines[i].split(' ').map(Number);

    if (x > y) {
        [x, y] = [y, x];
    }

    let sum = 0;
    for (let j = x + 1; j < y; j++) {
        if (j % 2 !== 0) {
            sum += j;
        }
    }

    console.log(sum);
}