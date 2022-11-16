// Crie uma classe para representar carros.
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
// Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor
// gasto em reais para realizar este percurso

class Carro {
    marca;
    cor;
    KMporLitro;

    constructor(marca, cor, KMporLitro) {
        this.marca = marca;
        this.cor = cor;
        this.KMporLitro = KMporLitro;
    }

    calcularViagem(distancia, precoCombustivel) {
        return console.log(`o valor gasto será de ${((distancia / this.KMporLitro) * precoCombustivel).toFixed(2)}`)
    }
}

const palio = new Carro('Fiat', 'Preto', 14);
console.log(palio);
palio.calcularViagem(180, 4.79);


/* Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancia uma pessoa chamada José que tenha 70kg e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/


class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc() {
        return (this.peso / (this.altura ** 2)).toFixed(2);
    }

    classificarImc() {
        const imc = this.imc()
        if (imc > 18) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso';
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso';
        } else {
            return 'Obesidade grave'
        }
    };
}
const jose = new Pessoa('José', 70, 1.75)
console.log(`O iMC do ${jose.nome} é ${jose.imc()} e a classificação é 
${jose.classificarImc()} `);