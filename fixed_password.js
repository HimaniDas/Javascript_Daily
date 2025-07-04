/*Write a program that keep reading a password until it is valid. For each wrong password read, write the message "Senha inválida". When the password is typed correctly print the message "Acesso Permitido" and finished the program. The correct password is the number 2002.

Input
The input file contains several tests cases. Each test case contains only an integer number.

Output
For each number read print a message corresponding to the description of the problem.

Input Sample
2200
1020
2022
2002
Output Sample
Senha Invalida
Senha Invalida
Senha Invalida
Acesso Permitido

If password is not 2002, print Senha Invalida.
If password is 2002, print Acesso Permitido and stop the program.
*/

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.trim().split('\n');

for (let i = 0; i < lines.length; i++) {
    let password = parseInt(lines[i]);

    if (password == 2002) {
        console.log("Acesso Permitido");
        break;
    } 
    else 
    {
        console.log("Senha Invalida");
    }
}
