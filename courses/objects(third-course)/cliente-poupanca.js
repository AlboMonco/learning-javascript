function Cliente(nome,cpf,email,saldo){ //função construtora (constructor)
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    };
    this.sacar = function(valor){
        this.saldo -= valor;
    };
};

const andre = new Cliente("Ju", "242153162153", "ju@email.com",100, 200)

function ClientePoupanca(nome,cpf,email,saldo,saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo);
    this.saldoPoup = saldoPoup;
};

const ju = new ClientePoupanca("Ju", "242153162153", "ju@email.com",100, 200);

console.log(ju);

ClientePoupanca.prototype.depositarPoup = function (valor){
    this.saldoPoup += valor;
}

ju.depositarPoup(30);
console.log(ju.saldoPoup);
console.log(andre.saldoPoup);
// Prototype => Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros.
// Criamos um novo tipo de objeto chamado Cliente (como se fosse uma classe), criamos os métodos para esse objeto. O prototype desse objeto é o objeto que define a function, e o prototype deste é o null.
// O JavaScript é frequentemente descrito como uma linguagem baseada em protótipos — para fornecer herança, os objetos podem ter um objeto de protótipo, que atua como um objeto de modelo do qual herda métodos e propriedades.
// Quando usamos new Cliente(), isso é chamado instância de Objeto.
// O JavaScript utiliza o termo own property (propriedade própria) para se referir às propriedades que pertencem ao objeto (como os exemplos nome, cpf e email) e que não são herdadas do protótipo.
// Além do nome e do valor, cada propriedade tem também três atributos:
// 
// Writable: Define se a propriedade pode ser adicionada a (ou escrita em) um objeto;
// Enumerable: Define se a propriedade é retornada, por exemplo, em um loop for...in ou utilizando Object.keys() / Object.values() / Object.entries(). Ou seja, se a propriedade é enumerável;
// Configurable: Especifica se a propriedade pode ser modificada ou deletada. Ou seja, se é configurável.
// Objetos criados de forma literal (const obj = {a: 1}) utilizam Object.prototype como protótipo; objetos criados com new a partir de um construtor herdam a propriedade prototype de sua função construtora; Objetos criados com Object.create() recebem como prototype o primeiro parâmetro da função - que pode ser null.

