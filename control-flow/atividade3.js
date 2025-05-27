const leia = require('readline-sync');

let codigo = leia.questionInt('Digite o codigo do produto (1 a 6): ');
let quantidade = leia.questionInt('Digite a quantidade (Apenas numero inteiro): ');

switch (codigo) {
    case 1:
        console.log(`\nProduto: Cachorro Quente`);
        console.log(`Valor total: R$ ${(quantidade * 10).toFixed(2)}`);
        break;
    case 2:
        console.log(`\nProduto: X-Salada`);
        console.log(`Valor total: R$ ${(quantidade * 15).toFixed(2)}`);
        break;
    case 3:
        console.log(`\nProduto: X-Bacon`);
        console.log(`Valor total: R$ ${(quantidade * 18).toFixed(2)}`);
        break;
    case 4:
        console.log(`\nProduto: Bauru`);
        console.log(`Valor total: R$ ${(quantidade * 12).toFixed(2)}`);
        break;
    case 5:
        console.log(`\nProduto: Refrigerante`);
        console.log(`Valor total: R$ ${(quantidade * 8).toFixed(2)}`);
        break;
    case 6:
        console.log(`\nProduto: Suco de laranja`);
        console.log(`Valor total: R$ ${(quantidade * 13).toFixed(2)}`);
        break;
    default:
        console.log('Codigo do produto inválido, digite de 1 a 6!');
}
