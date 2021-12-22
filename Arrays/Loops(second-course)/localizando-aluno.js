const alunos = ["João", "Juliana", "Caio", "Ana"];

const mediasDosAlunos = [10, 8, 7.5, 9];

let listaDeNotasEAlunos = [alunos,mediasDosAlunos];
// Primeiramente, definimos as listas de alunos e as médias dos mesmos, e criamos uma array 2D, como se fosse uma tabela

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){  // Criamos a função que exibe a nota do aluno, baseado no nome. Input = nomeDoAluno; Output = notaDoAluno. 
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return `${listaDeNotasEAlunos[0][indice]}, sua média é ${listaDeNotasEAlunos[1][indice]}`;
    } else{
        return "Aluno não cadastrado";
    }

}

console.log(exibeNomeNota("Nemo"));

// Novo método .includes() diz se um elemento está incluido na array. Retorna um dado do tipo booleano.
// indexOf -> número
