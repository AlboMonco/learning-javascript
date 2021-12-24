const nomes = ["Ana", "Ju", "Leo", "Paula"];

// o forEach(function) é um exemplo de função callback.
// função criada fora do forEach().
nomes.forEach(imprimeNomes);

function imprimeNomes(nome, indice, outraCoisa){
    console.log(nome, indice, outraCoisa);
}

