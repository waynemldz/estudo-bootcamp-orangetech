// lista
const alunos = ['João', 'Vitor', 'Marina'];

// adicionando diretamente
alunos[4] = 'Vinícius';

// adicionando dinamicante
alunos.push('Renan');
// 'João', 'Vitor', 'Marina', 'Vinícius', 'Renan'

// remove o ultimo item
alunos.pop();
// 'João', 'Vitor', 'Marina', 'Vinícius'

// remove o primeiro item
alunos.shift();
// 'Vitor', 'Marina', 'Vinícius'

console.log(alunos);

// 2ª parte da aula

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

// mostra a quantidade de itens do array

alunos.length

// exemplo de utilidade

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
const media = soma / notas.length
console.log(media)