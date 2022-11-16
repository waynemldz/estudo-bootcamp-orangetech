// importando
const funcoes = require('./funcoes-auxiliares');

const texto = 'Samos saibios, saibiamos tudo que saibamos';
// utilizando a função importada
funcoes.print(texto); // puxando função específica


// criando as duas funções como duas variáveis diferentes 
// e prontas para serem utilizadas
const {gets, print} = require('./funcoes-auxiliares');

print(gets()); // 10