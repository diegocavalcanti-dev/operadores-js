// const leia = require('readline-sync')

// // // // for (variavel inicial; limite; aumento do valor inicial) {

// // // // }

// // // // let contador

// // // // for(contador = 1; contador < 10; contador + 2) {
// // // //     console.log('oi');
// // // // }

// // // // contador++ = contador + 1

// // // let contador
// // // let numero = 5

// // // for(contador = 1; contador <= 10; contador++) {
// // //     console.log(numero + ' * ' + contador + ' = ' + (numero * contador));
// // // }

// // // let contador1
// // // let numero1 = 2

// // // for(contador1 = 1; contador1 <= 10; contador1 + 2) {
// // //     console.log(numero1 + ' X ' + contador1 + ' = ' + (numero1 * contador1));
// // //     // console.log(`${numero1} X ${contador1} = ${numero1 * contador1}`);
// // // }
// // const leia = require("readline-sync");

// // // let nome;
// // // let contador;

// // // for (contador = 1; contador <= 4; contador++) {
// // //   nome = leia.question("Digite um nome: ");
// // //   console.log("O " + contador + "º nome digitado foi: " + nome);
// // // }

// // // let numero1, numero2, resultado;


// // // for (let contador = 0; contador < 3; contador++) {
// // //     numero1 = leia.questionInt("Digite o primeiro valor: ");
// // //     numero2 = leia.questionInt("Digite o segundo valor: ");

// // //     resultado = numero1 + numero2;

// // //     console.log("O resultado da soma é: " + resultado)
// // // }

// // // let numero1, numero2, resultado;
// // // let continuar = true;

// // // while(continuar === true) {
// // //     numero1 = leia.questionInt("Digite o primeiro valor: ");

// // //     numero2 = leia.questionInt("Digite o segundo valor: ");

// // //     resultado = numero1 + numero2;

// // //     console.log("O resultado da soma é: " + resultado + "\n")

// // //     continuar = leia.keyInYNStrict("Quer fazer mais uma conta? ")
// // // }

// // let numero1, numero2, resultado;
// // let continuar 

// // do{
// //     numero1 = leia.questionInt("Digite o primeiro valor: ");

// //     numero2 = leia.questionInt("Digite o segundo valor: ");

// //     resultado = numero1 + numero2;

// //     console.log("O resultado da soma é: " + resultado + "\n")

// //     continuar = leia.keyInYNStrict("Quer fazer mais uma conta? ")
// // }while(continuar === true) 



// // *--------------------------------------------------------------------------------------------

// // LAÇOS DE REPIÇÃO FOR -----------------------------------------------------------

// // ------------- EXEMPLOS ABAIXO DE ESTRUTURA NÃO FOR -------------

// let nome1, nome2, nome3

// nome1 = leia.question("Digite o primeiro nome: ")
// console.log("O primeiro nome é: " + nome1)

// nome2 = leia.question("Digite o primeiro nome: ")
// console.log("O segundo nome é: " + nome2)

// nome3 = leia.question("Digite o primeiro nome: ")
// console.log("O terceiro nome é: " + nome3)
// ------------- EXEMPLO ABAIXO PASSANDO EX ACIMA PARA FOR -------------
// let nome;
// let contador;

// for (contador = 1; contador <= 4; contador++) {
//     nome = leia.question("Digite o " + contador + "o nome: ");
//     console.log("O " + contador + "º nome digitado foi: " + nome);
// }

// // ------------- EXEMPLOS ABAIXO DE ESTRUTURA NÃO FOR -------------

// let numero, contador;

// numero = leia.questionInt("Calcule a Tabuada do: ")

// for (contador = 1; contador <= 10; contador++) {
//     console.log(numero + " X " + contador + " = " + numero * contador)
    
// }

// // LAÇOS DE REPIÇÃO WHILE -----------------------------------------------------------

// let continua = true;

// let numero1, numero2, resultado;

// while (continua) {
//     numero1 = leia.questionInt("Digite o primeiro valor: ");
//     numero2 = leia.questionInt("Digite o segundo valor: ");

//     resultado = numero1 + numero2;

//     console.log("O Resultado da soma é: " + resultado);
//     console.log("\n+++++++++MENU+++++++++++");
//     continua = leia.keyInYNStrict("\nDeseja continuar?")
//     console.log("+++++++++++++++++++++++")
// }

// // LAÇOS DE REPIÇÃO DO WHILE -----------------------------------------------------------

// let numero, resultado, contador = 3;

// do {
//     numero = leia.questionInt("\nDigite um numero inteiro: ");
//     resultado = numero * 5;

//     console.log("\nO resultado da multiplicação é: " + resultado);

// } while (contador <= 2);

