const cliente = {
    nome:"André",
    idade:36,
    cpf:"1254365226",
    email:"andre@email.com",
    telefones: ["5522973352134", "5521988743124"],
    dependentes:[
        {
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "20/03/2011"},
        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014",
        }
    ],
    saldo: 100,
    depositar: function (valor){
        this.saldo += valor;
    },
};


console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);
