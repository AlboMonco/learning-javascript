const numeros = [100,200,300,400,500,600];

for (let i = 0; i < numeros.length; i++){
    console.log(i,numeros[i]);
}


//for ([inicialização]; [condição]: Optional; [expressão final])
// declaração

//// inicialização
// Uma expressão (incluindo expressões de atribuição) ou declarações variáveis. Geralmente usada para iniciar o contador de variáveis. Esta expressão pode, opcionalmente, declarar novas variáveis com a palavra chave var. Essas variáveis não são locais no loop, isto é, elas estão no mesmo escopo que o loop for está. Variáveis declaradas com let são locais para a declaração. O resultado desta expressão é descartado.

//// condição
// Uma expressão para ser avaliada antes de cada iteração do loop. Se esta expressão for avaliada para true, declaração será executado. Este teste da condição é opcional. Se omitido, a condição sempre será avaliada como verdadeira. Se a expressão for avaliada como falsa, a execução irá para a primeira expressão após a construção loop for.

//// expressão final
// Uma expressão que será validada no final de cada iteração de loop. Isso ocorre antes da próxima avaliação da condição. Geralmente usado para atualizar ou incrementar a variável do contador.

//Outro caso que pode gerar loop infinito é o de alterações feitas na variável de controle dentro do bloco do for, o que não é uma boa prática.
