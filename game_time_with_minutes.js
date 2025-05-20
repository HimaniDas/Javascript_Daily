//Read the start time and end time of a game, in hours and minutes (initial hour, initial minute, final hour, final minute). Then print the duration of the game, knowing that the game can begin in a day and finish in another day,

//Obs.: With a maximum game time of 24 hours and the minimum game time of 1 minute.

//Input
//Four integer numbers representing the start and end time of the game.

//Output
//Print the duration of the game in hours and minutes, in this format: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” . Which means: the game lasted XXX hour(s) and YYY minutes.

//Input Sample	
//7 8 9 10
//Output Sample
//O JOGO DUROU 2 HORA(S) E 2 MINUTO(S)
var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let [startHour, startMinute, endHour, endMinute] = lines[0].split(' ').map(Number);

// Convert start and end time to minutes
let startTotal = startHour * 60 + startMinute;
let endTotal = endHour * 60 + endMinute;

// If end time is less than or equal to start time, it means it passed midnight
if (endTotal <= startTotal) {
    endTotal += 24 * 60;
}

let duration = endTotal - startTotal;
let durationHour = Math.floor(duration / 60);
let durationMinute = duration % 60;

console.log(`O JOGO DUROU ${durationHour} HORA(S) E ${durationMinute} MINUTO(S)`);
