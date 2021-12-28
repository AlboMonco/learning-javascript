const cliente = {
    nome:"André",
    idade:36,
    cpf:"1254365226",
    email:"andre@email.com",
};


let chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach(chave => console.log(cliente[chave]));

// Quando estamos trabalhando com chaves em objetos vindas de lugares fora do scopo do objeto ao longo do sistema, utilizamos a noção de colchetes.
// Sintaxe: objeto[coisa].

// Quando uma chave não existe, console.log(cliente["coisa que não existe"]) retorna undefined.