class Pessoa{
    constructor(nome,sobrenome,email,){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
    }

    exibirNomeCompleto(){
        console.log(`${this.nome} ${this.sobrenome}`);
    }
}


const enzo = new Pessoa("Enzo","Monaco", "74983658169", "enzo@email.com", 100);
enzo.exibirNomeCompleto();

// Classes são modelos usados para criação de objetos.
// A classe define os atributos (características) e os métodos (comportamentos) de um objeto.

// Herança: É um mecanismo da Orientação a Objetos que permite que uma classe herde características de outra classe.

class Programador extends Pessoa{
    constructor(nome,sobrenome,email,linguagem){
        super(nome,sobrenome,email); // funciona como se fosse Pessoa.call()
        this.linguagem = linguagem;
    }
};


// O Objeto é a instância de uma classe.

const novoDev = new Programador("André", "Silva", "andre@email.com", "javascript")

console.log(novoDev);

//