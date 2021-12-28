const cliente = {
    nome:"André",
    idade:36,
    cpf:"1254365226",
    email:"andre@email.com",
};

// Adicionando ou alterando uma chave qualquer em algum objeto.

console.log(cliente);

cliente.fone = "923241413414";

console.log(cliente);

cliente.fone = "923241413413";

console.log(cliente);

// Removendo uma chave:

delete cliente.fone;
delete cliente["email"];
console.log(cliente);


// delete remove a chave e o valor inserido nela. 
// delete retorna um booleano, mas não retorna false se a chave inserida não existir.

// O operador delete não remove propriedades herdadas de outro objeto, e aí sim, neste caso, retornará false se tentarmos fazer isso. 