// Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 a 100;
// Faça um programa que receba os 5 numeros de cada aluno e mostre o maior número;
//  Entrada: 5, 50, 10, 98, 23

const {gets, print} = require('./funcoes-auxiliares')
const numerosSorteados = [];
for (let i = 0; i < 5; i++){
    const numeroSorte = gets();
    numerosSorteados.push(numeroSorte); // numeroSorteados = [5, 50, 10, 98, 23]
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numero = numerosSorteados[i]
    if(numero > maiorValor){
        maiorValor = numero;
    }
}
print(maiorValor);




