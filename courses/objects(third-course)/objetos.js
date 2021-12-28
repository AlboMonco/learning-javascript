const listaCPFs = ["12365242625", "9242624265", "9352524652"];


// const cliente = ["nome", "André", "idade", 36];

// estrutura do objeto

const cliente = {
    nome:"André",
    idade:36,
    cpf:"1254365226",
    email:"andre@email.com",
};


const cliente2 = Object.create(cliente); // Esse jeito de criar objetos burlar a atribuição de objetos como referência.
cliente2.nome = "Enzo";

console.log(cliente2.nome);
console.log(cliente.nome);

