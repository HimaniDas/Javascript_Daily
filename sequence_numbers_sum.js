/*Read an undetermined number of pairs values M and N (stop when any of these values is less or equal to zero). For each pair, print the sequence from the smallest to the biggest (including both) and the sum of consecutive integers between them (including both).

Input
The input file contains pairs of integer values M and N. The last line of the file contains a number zero or negative, or both.

Output
For each pair of numbers, print the sequence from the smallest to the biggest and the sum of these values, as shown below.

Input Sample	
5 2
6 3
5 0
Output Sample
2 3 4 5 Sum=14
3 4 5 6 Sum=18

Reads all lines from input.txt.
Splits each line into numbers m and n.
Stops reading if either is ≤ 0.
Otherwise:
Loops from the smaller to the larger number.
Builds the sequence string and calculates the sum.
Outputs as required.

*/

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.trim().split('\n');

for (let i = 0; i < lines.length; i++) {
    let [m, n] = lines[i].split(' ').map(Number);

    if (m <= 0 || n <= 0) {
        break;
    }

    let start = Math.min(m, n);
    let end = Math.max(m, n);
    let sum = 0;
    let sequence = '';

    for (let j = start; j <= end; j++) {
        sequence += j + ' ';
        sum += j;
    }

    console.log(`${sequence}Sum=${sum}`);
}
