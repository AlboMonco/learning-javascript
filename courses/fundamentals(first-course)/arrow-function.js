function apresentar(nome){
    return `meu nome é ${nome}`;
}

// Arrow function
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10){
        return "Somente números de 1 a 9";
    } else {
        return num1 + num2;
    }
}

// Hoisting: arrow function se comporta como expressão de função, ou seja, não sofre a elevação que a declaração de função e a var sofrem.

// operador maior ou igual que
// >=

function algo(){
    return true;
}
// esse caso, quando só temos uma linha de instrução dentro da arrow function, não precisamos usar chaves e nem da palavra-chave return.

// Caso você tenha mais de uma linha de instrução dentro de uma arrow function, as chaves {} e a palavra-chave return voltam a ser necessários.