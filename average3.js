//Read four numbers (N1, N2, N3, N4), which one with 1 digit after the decimal point, corresponding to 4 scores obtained by a student. Calculate the average with weights 2, 3, 4 e 1 respectively, for these 4 scores and print the message "Media: " (Average), followed by the calculated result. If the average was 7.0 or more, print the message "Aluno aprovado." (Approved Student). If the average was less than 5.0, print the message: "Aluno reprovado." (Reproved Student). If the average was between 5.0 and 6.9, including these, the program must print the message "Aluno em exame." (In exam student).

//In case of exam, read one more score. Print the message "Nota do exame: " (Exam score) followed by the typed score. Recalculate the average (sum the exam score with the previous calculated average and divide by 2) and print the message “Aluno aprovado.” (Approved student) in case of average 5.0 or more) or "Aluno reprovado." (Reproved student) in case of average 4.9 or less. For these 2 cases (approved or reproved after the exam) print the message "Media final: " (Final average) followed by the final average for this student in the last line.

//Input
//The input contains four floating point numbers that represent the students' grades.

//Output
//Print all the answers with one digit after the decimal point.

//Input Sample	
//2.0 4.0 7.5 8.0
//6.4
//Output Sample
//Media: 5.4
//Aluno em exame.
//Nota do exame: 6.4
//Aluno aprovado.
//Media final: 5.9


var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let [n1, n2, n3, n4] = lines[0].split(' ').map(Number);

let average = ((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / 10;
console.log(`Media: ${average.toFixed(1)}`);

if (average >= 7.0) { //If average is 7.0 or more → student is approved.
    console.log("Aluno aprovado.");
} 
else if (average < 5.0) { //If average is less than 5.0 → student is failed.
    console.log("Aluno reprovado.");
} 
else {
    console.log("Aluno em exame.");//If average is between 5.0 and 6.9, inclusive → student must take an exam.
    const examScore = parseFloat(lines[1]);
    console.log(`Nota do exame: ${examScore.toFixed(1)}`);
    const finalAverage = (average + examScore) / 2;
    if (finalAverage >= 5.0) { //If final average is 5.0 or more → student is approved.
        console.log("Aluno aprovado.");
    } 
    else {
        console.log("Aluno reprovado.");//Else → student is failed.
    }
    console.log(`Media final: ${finalAverage.toFixed(1)}`);
}