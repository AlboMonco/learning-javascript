// tipo number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero;

console.log(operacaoMatematica);

// ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao);

// NaN -> Not A Number

const alura = "Alura";
console.log(alura + primeiroNumero);

// Math.round(numero) -> arredonda o número
// .toFixed(numero) -> coloca no número quantas casas decimais eu colocar no valor "número". .toFixed() arredonda o número para cima. (retornará uma string)
// .toLocaleString() -> converte um número para uma string. Recebe os argumentos style (decimal, currency(moeda), percent(formato percentual)) e currency(moeda a ser usada)
// Math.ceil(numero) -> retorna o maior número inteiro que é maior que o número passado
// Math.floor() -> retorna o menor número inteiro que é menor que o número passado