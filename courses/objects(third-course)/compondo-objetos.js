const cliente = {
    nome:"André",
    idade:36,
    cpf:"1254365226",
    email:"andre@email.com",
    telefones: ["5522973352134", "5521988743124"]
};

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011",
};

console.log(cliente);

cliente.dependentes.nome = "Sara Silva";

console.log(cliente);