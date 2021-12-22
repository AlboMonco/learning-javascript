// tipo de dado
// booleanos

// conversão implícita

const numero = 456;
const numeroString = "456";

console.log(numero + numeroString);

// conversão explícita

//Number() ==> converte para número
//String() ==> converte para string
console.log(numero + Number(numeroString));

// let largura = “10”;
// let altura = “5”;
// console.log( + largura * + altura); (Converte as variáveis strings em números.)
// Boa prática: fazer as conversões de forma explícita sempre. 
