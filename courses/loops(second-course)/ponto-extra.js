const notas = [10,9,8,7,6];

const notasAtualizadas = notas.map(nota => nota === 10 ? nota : ++nota); // nota++ retorna a nota e depois soma. ++nota soma a nota e depois retorna o valor da varíavel nota.

console.log(notasAtualizadas);


// Diferença entre .map() e forEach(): forEach() não retorna valor, ele só executa a função. O map() retorna um valor, por isso a necessidade de colocar numa variável.map().

