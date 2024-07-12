var funcao = require('./funcoes')
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Dado um array de números inteiros, crie uma função que retorne um novo array contendo apenas os números pares. Utilize o método filter.

console.log(funcao.pares(array));

// 2. Crie uma função que receba um array de números e retorne o maior número presente no array

console.log(funcao.maiorNumero(array));

// 3. Crie uma função que receba um array de pessoas e retorne o primeiro objeto com idade maior ou igual a 40

var pessoas = [
  {
    nome: "joao",
    idade: 20,
  },
  {
    nome: "joao",
    idade: 30,
  },
  {
    nome: "joao",
    idade: 40,
  },
];

console.log(funcao.maiorIdade(pessoas));

// 4. Crie uma função que receba um array de alunos e retorne o apenas os alunos aprovados (nota maior ou igual a 7)

var alunos = [
  {
    nome: "Aluno 1",
    nota: 10,
  },
  {
    nome: "Aluno 2",
    nota: 6,
  },
  {
    nome: "Aluno 3",
    nota: 7,
  },
];

console.log(funcao.alunosAprovados(alunos));

// 5. Crie uma função que receba um array de numeros e retorne um array contendo apenas os números múltiplos de 5

console.log(funcao.multiploDe5(array));

// 5. Crie uma função que receba um array de numeros e retorne um array contendo apenas os números múltiplos de 5 e retorna apenas os que forem pares.

console.log(funcao.multiploDe5EapenasPares(array));