//Peter is organizing an event in his University. The event will be in April month, beginning and finishing within April month. The problem is: Peter wants to calculate the event duration in seconds, knowing obviously the begin and the end time of the event.

//You know that the event can take from few seconds to some days, so, you must help Peter to compute the total time corresponding to duration of the event.

//Input
//The first line of the input contains information about the beginning day of the event in the format: “Dia xx”. The next line contains the start time of the event in the format presented in the sample input. Follow 2 input lines with same format, corresponding to the end of the event.

//Output
//Your program must print the following output, one information by line, considering that if any information is null for example, the number 0 must be printed in place of W, X, Y or Z:

//W dia(s)
//X hora(s)
//Y minuto(s)
//Z segundo(s)

//Obs: Consider that the event of the test case have the minimum duration of one minute. “dia” means day, “hora” means hour, “minuto” means minute and “Segundo” means second in Portuguese.
//Input Sample	
//Dia 5
//08 : 12 : 23
//Dia 9
//06 : 13 : 23
//Output Sample
//3 dia(s)
//22 hora(s)
//1 minuto(s)
//0 segundo(s)

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
const line1 = lines[0];
const line2 = lines[1];
const line3 = lines[2];
const line4 = lines[3];

const startDay = parseInt(line1.split(' ')[1]);
const endDay = parseInt(line3.split(' ')[1]);

const [h1, m1, s1] = line2.split(' : ').map(Number);
const [h2, m2, s2] = line4.split(' : ').map(Number);

const startSeconds = (startDay * 86400) + (h1 * 3600) + (m1 * 60) + s1;
const endSeconds = (endDay * 86400) + (h2 * 3600) + (m2 * 60) + s2;

let duration = endSeconds - startSeconds;

const days = Math.floor(duration / 86400);
duration %= 86400;

const hours = Math.floor(duration / 3600);
duration %= 3600;

const minutes = Math.floor(duration / 60);
const seconds = duration % 60;

console.log(`${days} dia(s)`);
console.log(`${hours} hora(s)`);
console.log(`${minutes} minuto(s)`);
console.log(`${seconds} segundo(s)`);