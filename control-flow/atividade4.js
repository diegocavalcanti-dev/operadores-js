const leia = require('readline-sync');

let nomeCompleto = leia.question('Digite o Nome Completo: ');
let codigoCargo = leia.questionInt('Digite o codigo do Cargo (1 a 6): ');
let salarioAtual = leia.questionFloat('Digite o salario atual: ');

switch (codigoCargo) {
    case 1:
        console.log(`\nNome do Colaborador: ${nomeCompleto}`);
        console.log(`Cargo: Gerente`);
        console.log(`Salario com Reajuste: R$ ${(salarioAtual + salarioAtual * 0.1).toFixed(2)}`);
        break;
    case 2:
        console.log(`\nNome do Colaborador: ${nomeCompleto}`);
        console.log(`Cargo: Vendedor`);
        console.log(`Salario com Reajuste: R$ ${(salarioAtual + salarioAtual * 0.07).toFixed(2)}`);
        break;
    case 3:
        console.log(`\nNome do Colaborador: ${nomeCompleto}`);
        console.log(`Cargo: Supervisor`);
        console.log(`Salario com Reajuste: R$ ${(salarioAtual + salarioAtual * 0.09).toFixed(2)}`);
        break;
    case 4:
        console.log(`\nNome do Colaborador: ${nomeCompleto}`);
        console.log(`Cargo: Motorista`);
        console.log(`Salario com Reajuste: R$ ${(salarioAtual + salarioAtual * 0.06).toFixed(2)}`);
        break;
    case 5:
        console.log(`\nNome do Colaborador: ${nomeCompleto}`);
        console.log(`Cargo: Estoquista`);
        console.log(`Salario com Reajuste: R$ ${(salarioAtual + salarioAtual * 0.05).toFixed(2)}`);
        break;
    case 6:
        console.log(`\nNome do Colaborador: ${nomeCompleto}`);
        console.log(`Cargo: Técnico de TI`);
        console.log(`Salario com Reajuste: R$ ${(salarioAtual + salarioAtual * 0.08).toFixed(2)}`);
        break;
    default:
        console.log('Codigo do cargo inválido, digite de 1 a 6!');
}
