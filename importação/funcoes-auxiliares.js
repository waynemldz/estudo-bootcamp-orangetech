const entradas = [5, 50, 10, 98, 23, 101, 29];
let i = 0;
function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto)
}

// exportando

module.exports = { gets, print }