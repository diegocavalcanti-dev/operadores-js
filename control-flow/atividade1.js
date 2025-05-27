const leia = require('readline-sync')

let numeroA = leia.questionInt('Digite o numero A: ');
let numeroB = leia.questionInt('Digite o numero B: ');
let numeroC = leia.questionInt('Digite o numero C: ');

let somaAeB = numeroA + numeroB;

if (somaAeB > numeroC) {
    console.log("\nA Soma de A + B é Maior do que C");
} 

if (somaAeB < numeroC) {
    console.log("\nA Soma de A + B é Menor do que C");
} 

if (somaAeB == numeroC) {
    console.log("\nA Soma de A + B é Igual a C");
} 
    
