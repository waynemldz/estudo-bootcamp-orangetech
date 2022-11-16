// strings também funcionam como arrays
const nome = 'Wayne Gabriel Nunes Ferreira';
console.log(nome.length); // 28

// loop
for(i = 0; i < nome.length; i++){
    console.log(nome[i]); // nome na posição [i] (vai mostrar todas as letras)
}


// exemplo utilizando o array anterior

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

// criar variável apenas para efetuar a soma com o for
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    const notaPorNota = notas[i]; // exibir nota por nota [5, 7, 8, 2, 5]
    soma = soma + notaPorNota; 
    // a sequência do repetição:
    // soma = 0 + notas[1]
    // soma passou a ser o resultado do cálculo acima (soma = 0 + 5 = 5)
    // soma = soma(5) + notas[2](7)
    // soma passou a ser o resultado acima (5 + 7)
    // assim segue sucessivamente até o loop retornar false
}
const media = soma / notas.length;
console.log(media); //5.83