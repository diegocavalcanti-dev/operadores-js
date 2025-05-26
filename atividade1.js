const leia = require('readline-sync')

let nome = leia.question('Digite seu nome, por favor: ')
let salario = leia.questionFloat(`Ola, ${nome}` + '! Digite seu salario: ')
let abono = leia.questionFloat(`Obrigado, ${nome}` + '! Agora digite seu abono: ')

let novoSalario = salario + abono;

console.log(`Parabéns! ${nome} seu salário era ${salario.toFixed(2)} e agora é ${novoSalario.toFixed(2)}`)
