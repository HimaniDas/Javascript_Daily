//Read the start time and end time of a game, in hours. Then calculate the duration of the game, knowing that the game can begin in a day and finish in another day, with a maximum duration of 24 hours. The message must be printed in portuguese “O JOGO DUROU X HORA(S)” that means “THE GAME LASTED X HOUR(S)”

//Input
//Two integer numbers representing the start and end time of a game.

//Output
//Print the duration of the game as in the sample output.

//Input Sample	
//16 2
//Output Sample
//O JOGO DUROU 10 HORA(S)

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let [start, end] = lines[0].split(' ').map(Number);//This splits the input string into two parts: "16" and "2", then converts them to numbers.

let duration;

if (start < end) {//If start is before end, subtract normally.If the game went overnight (start >= end), calculate the wrap-around.
    duration = end - start;
} else {
    duration = 24 - start + end;
}

console.log(`O JOGO DUROU ${duration} HORA(S)`);