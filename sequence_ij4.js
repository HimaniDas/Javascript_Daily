/*Make a program that prints the sequence like the following example.

Input
This problem doesn't have input.

Output
Print the sequence like the example below.

Output Sample
I=0 J=1
I=0 J=2
I=0 J=3
I=0.2 J=1.2
I=0.2 J=2.2
I=0.2 J=3.2
.....
I=2 J=?
I=2 J=?
I=2 J=?
*/
for (let i = 0; i <= 2.1; i += 0.2) {
    for (let j = 1; j <= 3; j++) {
        let I = +(i.toFixed(1)); //+() is used to convert back to a number (so 1.0 becomes 1). This removes the need for manual checks using Number.isInteger().
        let J = +(i + j).toFixed(1);
        console.log(`I=${I} J=${J}`);
    }
}