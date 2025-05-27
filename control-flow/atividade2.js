const leia = require('readline-sync');

let caracteristica1 = leia.question('Digite a primeira caracteristica: ');
let caracteristica2 = leia.question('Digite a segunda caracteristica: ');
let caracteristica3 = leia.question('Digite a terceira caracteristica: ');

if (caracteristica1 === 'vertebrado') {
    if (caracteristica2 === 'ave') {
        if (caracteristica3 === 'carnivoro') {
            console.log(`\nO animal é: Águia`);
        } else if (caracteristica3 === 'onivoro') {
            console.log(`\nO animal é: Pomba`);
        }
    } else if (caracteristica2 === 'mamifero') {
        if (caracteristica3 === 'onivoro') {
            console.log(`\nO animal é: Homem`);
        } else if (caracteristica3 === 'herbivoro') {
            console.log(`\nO animal é: Vaca`);
        }
    }
} else if (caracteristica1 === 'invertebrado') {
    if (caracteristica2 === 'inseto') {
        if (caracteristica3 === 'hematofago') {
            console.log(`\nO animal é: Pulga`);
        } else if (caracteristica3 === 'herbivoro') {
            console.log(`\nO animal é: Lagarta`);
        }
    } else if (caracteristica2 === 'anelideo') {
        if (caracteristica3 === 'hematofago') {
            console.log(`\nO animal é: Sanguessuga`);
        } else if (caracteristica3 === 'onivoro') {
            console.log(`\nO animal é: Minhoca`);
        }
    }
}
