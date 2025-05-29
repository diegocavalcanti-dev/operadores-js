const leia = require('readline-sync')

// // // // // // // // // Variáveis JavaScript

// // // // // // // // // Java
// // // // // // // // // int -> numeros inteiros
// // // // // // // // // float -> numeros fluantes (casa decimal)
// // // // // // // // // bigint -> numeros inteiros grandes
// // // // // // // // // double

// // // // // // // // //JS -> number

// // // // // // // // // Java
// // // // // // // // // char -> armazena um unico caracter
// // // // // // // // // String -> armazena uma lista de caracteres

// // // // // // // // // JS
// // // // // // // // // string -> qualquer tipo de texto, ou caracteres

// // // // // // // // // let nome = "Diego";
// // // // // // // // // console.log(nome)

// // // // // // // // // let nome = "Diego"
// // // // // // // // // console.log(nome + ". Tudo bem?")

// // // // // // // // // let void = 'camelCase'

// // // // // // // // // let nomeCompleto = 'camelCase'
// // // // // // // // // var segundoNome = ''

// // // // // // // // // let quantidade = 10;
// // // // // // // // // console.log("O Tipo da variável quantidade é: ", typeof(quantidade));

// // // // // // // // // let altura = 1.87;
// // // // // // // // // console.log("O Tipo da variável altura é: ", typeof(altura));

// // // // // // // // // let tipo = 'A';
// // // // // // // // // console.log("O Tipo da variável tipo é: ", typeof(tipo));

// // // // // // // // // let nome = "Mariana Alves";
// // // // // // // // // console.log("O Tipo da variável nome é: ", typeof(nome));

// // // // // // // // // let resposta = true;
// // // // // // // // // console.log("O Tipo da variável resposta é: ", typeof(resposta));

// // // // // // // // // const valor = 5
// // // // // // // // // valor = 98
// // // // // // // // // console.log(valor)

// // // // // // // // // let identificador = 10000;
// // // // // // // // // let area = 45.4567;
// // // // // // // // // let palavra = "Generation";

// // // // // // // // // console.log("Formatação - Número Inteiro: %d", identificador);
// // // // // // // // // console.log("Formatação - Número Real: %f",area);
// // // // // // // // // console.log("Formatação - String: %s",palavra);
// // // // // // // // // console.log(`Aqui é um texto que vai mostrar um numero: ${identificador}, ${palavra} e continua`);

// // // // // // // // // let identificador = 10.0000;
// // // // // // // // // let area = 45.456739;
// // // // // // // // // let salarioBruto = 3500.448787


// // // // // // // // // console.log("Formatação - Valor Monetário:\t " +
// // // // // // // // // 	new Intl.NumberFormat('en-US', {
// // // // // // // // // 		style: 'currency',
// // // // // // // // // 		currency: 'USD',
// // // // // // // // // 	}).format(salarioBruto)
// // // // // // // // // );

// // // // // // // // let nomeCompleto = leia.question('Digite seu nome: ')
// // // // // // // // let idade = leia.questionFloat('Digite sua idade: ')
// // // // // // // // console.log("Seu nome é " + nomeCompleto + " e sua idade é " + idade)


// // // // // // // let quantidade;
// // // // // // // let altura;
// // // // // // // let tipo;
// // // // // // // let resposta;
// // // // // // // let palavra;

// // // // // // // // quantidade = leia.questionInt("\nDigite um valor do tipo Inteiro: ", {limitMessage: 'Digite um numero inteiro'})
// // // // // // // // console.log("O valor inteiro digitado foi: " + quantidade)

// // // // // // // // altura = leia.questionFloat("\nDigite um valor do tipo float: ", {limitMessage: 'Digite um numero float'})
// // // // // // // // console.log("O valor float digitado foi: " + altura)

// // // // // // // tipo = leia.keyIn("\nDigite um valor do tipo Char: ");
// // // // // // // console.log("\nO valor char digitado foi: " + tipo);

// // // // // // //  let vs const

// // // // // // // const pi = 3.14515;

// // // // // // // pi = 20.357
// // // // // // // console.log(pi);

// // // // // // let quantidade = 10; //inteiro
// // // // // // let altura = 1.85; //ponto fluante
// // // // // // let tipo = 'A'; //caracter
// // // // // // let nome = 'Marina Alves'
// // // // // // let resposta = true // verdadeiro ou falso

// // // // // // console.log(quantidade)
// // // // // // console.log(altura)
// // // // // // console.log(tipo)
// // // // // // console.log(nome)
// // // // // // console.log(resposta)

// // // // // // Operadores aritméticos:
// // // // // // let x = 4;
// // // // // // let y = 2;
// // // // // // let z = 3;
// // // // // // let w = -5;
// // // // // // console.log("Soma (4+2): " + (x + y));
// // // // // // console.log("\nSoma com numero negativo (4 + (-5)): " + (x + w));
// // // // // // console.log("\nSubtração (4 - 2): " + (x - y));
// // // // // // console.log("\nMultiplicação (4 * 2): " + x * y);
// // // // // // console.log("\nDivisão (4/2): " + x / y);
// // // // // // console.log("\nMódulo (resto da divisão)): " + (x % 2));
// // // // // // console.log("\nMódulo (resto da divisão)): " + (z % 2));




// // // // // // Concatenação de string
// // // // // // let texto01 = "Generation"
// // // // // // let texto02 = "Brasil"
// // // // // // let texto03 = " "
// // // // // // console.log("Concatenar texto01 e texto02: " + texto01 + texto02);
// // // // // // console.log("Concatenar texto01 e texto02: " + texto02 + texto01);
// // // // // // console.log("Concatenar texto01 e texto02: " + texto01 + texto03 + texto02);
// // // // // // console.log("Concatenar texto01 e texto02: " + texto02 + texto03 + texto01);


// // // // // // // Interpolação de strings;
// // // // // // let atividades = 90.5, presenca = 100.00;
// // // // // // console.log(`O participante possui ${atividades}% de atividades entregues.`)
// // // // // // console.log(`O participante possui ${presenca}% de presença nas sessões.`)




// // // // // // Operadores Relacionais:
// // // // // let x = 10;
// // // // // let y = 5;
// // // // // let z = 20;
// // // // // let w = 5;

// // // // // let resposta;

// // // // // resposta = x > y;
// // // // // console.log("O valor de x é maior do que o valor de y? " + resposta);
// // // // // resposta = z >= y;
// // // // // console.log("O valor de z é maior do que o valor de y? " + resposta);
// // // // // resposta = x < z;
// // // // // console.log("O valor de x é maior do que o valor de z? " + resposta);
// // // // // resposta = z <= w;
// // // // // console.log("O valor de z é maior do que o valor de w? " + resposta);

// // // // // var numero = 5

// // // // // // console.log(`valor antes do if: ${numero}`);

// // // // // if (3 == 3) {
// // // // //     // let numero2 = 8 //escopo local
// // // // //     console.log('é igual');
// // // // // }

// // // // // console.log('================');
// // // // // // console.log(`valor depois do if: ${numero}`);
// // // // // // console.log(`valor 2 do if: ${numero2}`);

// // // // // // == igualdade simples -> verifica apenas o valor
// // // // // // === igualdade estrita -> verifica valor e tipo

// // // // // let n1 = 4, n2 = 3, n3 = 4;

// // // // // if (n1 < 5) {
// // // // //     console.log("O numero 1 é menor do que 5.");
// // // // // }

// // // // // if (n1 < n2) {
// // // // //     console.log("O numero 1 é menor do que o número 2.");
// // // // // }

// // // // // if (n1 === n3) {
// // // // //     console.log("O numero 1 e o número 3 são iguais.");
// // // // // }

// // // // let numero = 5

// // // // if (numero > 10 || numero < 0) {
// // // //     console.log('digite uma nota valida');
// // // //     return
// // // // }

// // // // if (numero >= 6) {
// // // //     console.log('passou');
// // // // } else if(numero >= 5) {
// // // //     console.log('recuperação')
// // // // } else {
// // // //     console.log('reprovou')
// // // // }

// // // // console.log('================');

// // // let opcao = 1

// // // switch (opcao) {
// // //     case 1:
// // //         console.log('Você escolheu o numero 1');
// // //         break
// // //     case 2:
// // //         console.log('Você escolheu o numero 2');
// // //         break
// // //     case 3:
// // //         console.log('Você escolheu o numero 3');
// // //         break
// // // }

// // // const leia = require('readline-sync')

// // let categoria;

// // let idade = leia.questionInt("Digite a idade do cliente: ");

// // // if (idade >= 0 && idade <= 12) {
// // //   categoria = "Criança";
// // // } else if (idade >= 13 && idade <= 17) {
// // //   categoria = "Adolescente";
// // // } else if (idade >= 18 && idade <= 59) {
// // //   categoria = "Adulto";
// // // } else if (idade >= 60) {
// // //   categoria = "Idoso";
// // // } else {
// // //   categoria = "Idade inválida";
// // // }

// // switch (true) {
// //   case idade >= 0 && idade <= 12:
// //     categoria = "Criança";
// //     break;
// //   case idade >= 13 && idade <= 17:
// //     categoria = "Adolescente";
// //     break;
// //   case idade >= 18 && idade <= 59:
// //     categoria = "Adulto";
// //     break;
// //   case idade >= 60:
// //     categoria = "Idoso";
// //     break;
// //   default:
// //     categoria = "Idade inválida";
// // }

// // console.log(`O Cliente é ${categoria}`);


// // if ternário

// (2 > 5) // === if (2 > 5)
// ? console.log('é maior') //{primeira chave do if}
// : console.log('é menor') //else

// if (2 > 5) {
//     console.log('é maior')
// } else {
//     console.log('é menor')
// }



// console.log('*************')



// laços condicionais
// laços condicionais
// laços condicionais

// ESTRUTURA IF

// let x = true;
// let y = false;

// if (x == true) {
//     console.log("X é verdadeiro");
// }

// if (y) {
//     console.log("Y é verdadeiro");
// }

// let n1 = 4, n2 = 3, n3 = 4;

// if (n1 < n2) {
//     console.log("O número 1 é menor do que 5.");
// } 

// let idade = 17;
// let carteiraM = false

// if (idade >= 18 && carteiraM == true) {
//     console.log("Você pode dirigir.");
// }

// if (idade <= 17 && carteiraM == false) {
//     console.log("Você não pode dirigir.");
// }









// ESTRUTURA IF / ELSE

// let nota1 = 4.9;
// let nota2 = 5;
// let media;

// media = (nota1 + nota2)/2;

// console.log(`\Sua média foi: ${media.toFixed(1)}`);

// if (media >= 6) {
//     // EXECUTA ALUMA AÇÃO CASO A CONDIÇÃO SEJA VERDADEIRA
//     console.log("Parabéns você foi aprovado")
// }else if(media >= 5) {
//     console.log("Você está de exame!")
// } else {
//     console.log("Infelizmente você foi reprovado...")
// }

// ESTRUTURA SWITCH CASE

let opcao;

opcao = 2

switch (opcao) {
    case 1:
        console.log("Livro: O Alquimista");
        break;
    case 2:
        console.log("Livro: O PEQUENO PRINCIPE");
        break;
    case 3:
        console.log("MUSICA: AUTORA");
        break;
    default:
        console.log("Digite um número de 1 a 3")
        break;
}



