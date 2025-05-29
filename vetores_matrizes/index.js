const leia = require("readline-sync")
// // // let vetorStrings = ["Boxer", "Pastor Alemão", "Pinscher", "Husky Siberiano", "Corgi"];


// // for(let contador = 0; contador < vetorStrings.length; contador++){
// //     console.log(contador+1 + " - Temos a raça: " + vetorStrings[contador]);
// // }

// // console.log("1º primeiro elemento da lista: " + vetorStrings[0]);
// // console.log("A primeira raça é: " + vetorStrings[1]);
// // console.log("A primeira raça é: " + vetorStrings[2]);
// // console.log("A primeira raça é: " + vetorStrings[3]);
// // console.log("A primeira raça é: " + vetorStrings[4]);
// // console.log("A primeira raça é: " + vetorStrings[5]);


// // // verificar o ultimo valor da lista
// // console.log(vetorStrings.at(-1));

// // let lista = [5,10,15,20]

// // console.log(lista);

// // //verificar o tamanho da lista
// // console.log(lista.length);

// // // Verificar ultimo numero da lista
// // console.log(lista.at(-1));

// // lista[4] = 123
// // lista[5] = 542
// // console.log(lista);

// // /////////////////////////////////////

// // let vetorMisto = ["Boxer", 1, true, "Husky Siberiano", 2.4];

// // console.log(vetorMisto)

// // Crie uma lista que receba 10 numero do usuario
// // 1 criar a lista vazia
// // receber 10 numeros
// // os 10 numeros vem do usuario ok

// const leia = require("readline-sync")
let lista = []
let soma = 0

for (let contador = 0; contador < 10; contador++) {
    lista[contador] = leia.questionInt('Manda um numero ai meu consagrado: ')
    soma = soma + lista[contador]
}
console.log(`A soma da lista é ${soma}`);
console.log(`A média dos valores é: ${soma/10}`);

// mostrar os numeros nos indices impares
for(let contador = 1; contador < 10; contador+=2) {
    console.log(`O numero ${lista[contador]} está no indice ${contador}`);
}

// mostrar apenas os numeros pares
for(let contador = 0; contador < 10; contador++) {
    if(lista[contador] % 2 === 0){
        console.log(`O número ${lista[contador]} é par`);
    }
}



// // lista[1] = leia.questionInt("Manda um numero ai meu nobre: ")



// let vetorNumero