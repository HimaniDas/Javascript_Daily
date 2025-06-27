/*Make a program that prints the sequence like the following exemple.

Input
This problem doesn't have input.

Output
Print the sequence like the example below.

Output Sample
I=1 J=7
I=1 J=6
I=1 J=5
I=3 J=9
I=3 J=8
I=3 J=7
...
I=9 J=15
I=9 J=14
I=9 J=13
*/

//I starts at 1 and increases by 2 until it reaches 9.
//For each value of I, print 3 lines where J starts from I + 6, then decreases by 1.

for (let i = 1, jStart = 7; i <= 9; i += 2, jStart += 2) {
    for (let j = jStart; j > jStart - 3; j--) {
        console.log(`I=${i} J=${j}`);
    }
}
