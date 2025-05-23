//In this problem, your job is to read three Portuguese words. These words define an animal according to the table below, from left to right. After, print the chosen animal defined by these three words.

//Input
//The input contains 3 words, one by line, that will be used to identify the animal, according to the above table, with all letters in lowercase.

//Output
//Print the animal name according to the given input.

//Input Samples	
//vertebrado
//mamifero
//onivoro
//Output Samples
//homem

var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');
let word1 = lines[0].trim();
let word2 = lines[1].trim();
let word3 = lines[2].trim();

let animal;

if (word1 == 'vertebrado') 
    {
    if (word2 == 'ave') 
        {
        if (word3 == 'carnivoro') 
            {
            animal = 'aguia';
        }
        else if (word3 == 'onivoro') 
            {
            animal = 'pomba';
        }
    } 
    else if (word2 == 'mamifero')
         {
        if (word3 == 'onivoro')
             {
            animal = 'homem';
        } 
        else if (word3 == 'herbivoro') 
            {
            animal = 'vaca';
        }
    }
} 
else if (word1 == 'invertebrado')
     {
    if (word2 == 'inseto')
         {
        if (word3 == 'hematofago')
             {
            animal = 'pulga';
        } 
        else if (word3 == 'herbivoro')
             {
            animal = 'lagarta';
        }
    } 
    else if (word2 == 'anelideo')
         {
        if (word3 == 'hematofago') 
            {
            animal = 'sanguessuga';
        } 
        else if (word3 == 'onivoro')
             {
            animal = 'minhoca';
        }
    }
}

console.log(animal);