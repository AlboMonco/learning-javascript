const cliente = {
    nome:"André",
    idade:36,
    cpf:"1254365226",
    email:"andre@email.com",
};


console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`);
console.log(cliente.cpf.substring(0,3));


// substring(começo: number, fim: number) => mostra somente os caracteres dentro da faixa do intervalo no método substring, não incluindo o último.