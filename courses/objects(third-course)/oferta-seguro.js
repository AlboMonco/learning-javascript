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



function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
};


console.log(Object.entries(cliente));
console.log(Object.values(cliente));
oferecerSeguro(cliente);


// Object.keys(objeto) ==> retorna uma array das chaves do objeto.
// Object.values(objeto) ==> retorna uma array dos valores do objeto.
// Object.entries(objeto) ==> retorna uma array de arrays de pares chaves e valor.