let userName = 'Wayne'


function meuNome(nome) {
    return 'Meu nome é ' + nome;
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(meuNome(userName) + ' - Maior de idade')
    }else{
        console.log(meuNome(userName) + ' - Menor de idade')
    }
}

verificarIdade(19)

