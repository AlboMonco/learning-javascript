const Pessoa = {
    nome: "Ana",
    email: "a@email.com",
}; 

const outraPessoa = {
    nome: "Enzo",
    email: "enzo@email.com",
};

const PessoaAleatoria = {
    nome: "Antonio",
    idade: 23,
    apresentar: function(){
        console.log(`Olá, eu sou o ${this.nome}`);
    },
}
   
function imprimeNomeEmail(valor, outroValor){                       
    console.log(valor, this.nome, this.email, outroValor); 
}

// Utilizei o this para tornar a função genérica para cada objeto.
// O this representa o objeto que executa a função. Podemos dizer que a instrução passada para o JavaScript é: “execute a função aqui, utilizando este contexto”.

// call()

imprimeNomeEmail.call(Pessoa, 1,3);
imprimeNomeEmail.call(outraPessoa, 2,4);

// O primeiro parâmetro do método call() se refere ao objeto que será usado como contexto do this e, do segundo parâmetro em diante, são passados os argumentos que a função deve receber. No caso acima, há somente um parâmetro, a string tipoCliente.

// apply() => mesma coisa que o call(), mas usa-se uma array.

const coisa = [1,2];
const outraCoisa = [3,4];

imprimeNomeEmail.apply(Pessoa, coisa);
imprimeNomeEmail.apply(outraPessoa, outraCoisa);

// bind()


const personagem = PessoaAleatoria.apresentar.bind(PessoaAleatoria)
console.log(personagem());
const outroPersonagem = PessoaAleatoria.apresentar.bind(Pessoa)
console.log(outroPersonagem());
