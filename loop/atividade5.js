const leia = require('readline-sync');

let numero= 0;
let soma= 0; 
let contador = 0;

while (true){
    numero = leia.questionInt("Digite um numero: ");

    if (numero === 0) {
        break; 
    }

    contador++; 
    
}

console.log("\nForam digitadas " + contador + " idade(s) válidas.");