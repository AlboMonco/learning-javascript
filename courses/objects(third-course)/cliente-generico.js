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

const andre = new Cliente("André","1213531513", "andre@email.com", 100);

andre.depositar(100);
andre.sacar(10);
console.log(andre);