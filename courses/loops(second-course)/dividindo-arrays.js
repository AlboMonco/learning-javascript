const nomes = ["João", "Juliana", "Ana", "Caio", "Lara", "Marjorie", "Guilherme", "Aline", "Fabiana", "André", "Carlos", "Paulo", "Bia", "Vivian", "Isabela", "Vinícius", "Renan", "Renata", "Daisy", "Camilo"];

//// slice() = do Inglês, "cortar", recebe dois argumentos. Para no último número anterior ao último index.

const sala1 = nomes.slice(0,nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);

