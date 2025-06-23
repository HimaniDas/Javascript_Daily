/*Make a program that prints the sequence like the following example.

Input
This problem doesn't have input.

Output
Print the sequence like the example below.

Input Sample

Output Sample
I=1 J=60
I=4 J=55
I=7 J=50
...
I=? J=0
*/
//I starts at 1 and increases by 3 until I <= 37

//J starts at 60 and decreases by 5 until J >= 0

let I = 1;
let J = 60;

while (J >= 0) {
    console.log(`I=${I} J=${J}`);
    I += 3;
    J -= 5;
}