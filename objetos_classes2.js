class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(name, old){
        this.nome = name;
        this.idade = old;
        this.anoDeNascimento = 2022 - old;
    }

    descrever(){
        console.log(`Eu sou ${this.nome} e tenho ${this.idade} anos, nasci no ano de ${this.anoDeNascimento}`)
    }
}

function compararIdade(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) do que ${p2.nome}`)
    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) do que ${p1.nome}`)
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

const wayne = new Pessoa('Wayne', 21)
const roger = new Pessoa('Roger', 21)

compararIdade(wayne, roger)