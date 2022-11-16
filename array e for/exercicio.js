// Imprima um programa que dado um número, imprima sua tabuada

function tabuadaDe(numero) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

tabuadaDe(5);


// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número 
// PAR encontrado


const numeros = [1, 2, 4, 5, 7, 12, 23, 43, 36, 98]

for (let i = 0; i <= numeros.length; i++) {
    if(numeros[i] % 2 === 0){ // confere se o atual número é par
        console.log(numeros[i]); // mostra o atual numero da repetição
    }    
}