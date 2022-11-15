const user = {
    nome: 'Wayne',
    idade: 21,

    // por algum motivo o this não funcionou na arrow function
    resumo: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};


// alterando dados
user.altura = 1.92; // acrescentou um atributo 
delete user.altura  // removeu o mesmo
user.resumo = function(){
    console.log(`Função alterada ${this.nome}`); // alterou a função matriz
}; 
console.log(user.resumo());

// Desfragmetando objetos
const atributo = 'idade';
console.log(user[atributo]);  //21


user['nome'] = 'Gabriel'; // Wayne = Gabriel
user.nome = 'Lucas'; // Gabriel = Lucas


// Dinamismo

// criando um outro user à mão
const user2 = {
    nome: 'Fernando',
    idade: 28,

    // por algum motivo o this não funcionou na arrow function
    resumo: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

// dinamizando
class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const vitor = new Pessoa();
vitor.nome = 'Vitor Guerra';
vitor.idade = 32;
console.log(vitor);

const roger = new Pessoa();
roger.nome = 'Roger Santos'
roger.idade = 22;
roger.descrever()



// constructor

class PessoaCompleta {
    nome;
    idade;
    altura;

    constructor (name, old, altura){
        this.nome = name;
        this.idade = old;
        this.altura = altura;
    }

    descrever(){
        console.log(`Eu sou ${this.nome} e tenho ${this.idade} anos, com ${this.altura} de altura`)
    }
}

let wayne = new PessoaCompleta('Wayne', 21, 1.89)
wayne.descrever()
