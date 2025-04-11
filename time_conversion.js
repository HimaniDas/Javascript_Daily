//Read an integer value, which is the duration in seconds of a certain event in a factory, and inform it expressed in hours:minutes:seconds.

//Input
//The input file contains an integer N.

//Output
//Print the read time in the input file (seconds) converted in hours:minutes:seconds like the following example.

//Input Sample
//556
//Output Sample
//0:9:16

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let seconds = parseInt(lines[0]);
let hours = Math.floor(seconds / 3600);
let minutes = Math.floor((seconds % 3600)/60);
let totalSeconds = seconds % 60;
console.log(`${hours}:${minutes}:${totalSeconds}`);
