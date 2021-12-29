function Pessoa(nome,idade){
    this.nome = nome;
    this.idade = idade;
}

const enzo = new Pessoa("Enzo", 17);

// OO

class OutraPessoa extends Pessoa{
    constructor(nome,idade,anoDeNasc){
        super(nome,idade);
        this.anoDeNasc = anoDeNasc;
    }

    exibirAnoNasc(){
        console.log(this.anoDeNasc);
    }

    exibirNome(){
        console.log(this.nome);
    }
}

const outroEnzo = new OutraPessoa("Enzo",17, 2004);

outroEnzo.exibirAnoNasc();
outroEnzo.exibirNome();

//

const OutraPessoaAleatoria = {
    nome: "Enzo",
    idade: 17
};