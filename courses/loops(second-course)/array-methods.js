//// concat() => não altera a array original. Junta duas arrays

// TESTE: let array1 = [1];
// TESTE: let array2 = [2];
// TESTE: console.log(array1.concat(array2));

//// filter() => filter() recebe uma função callback, que pode ter até 3 parâmetros, e a função deve retornar somente booleanos. Se for true, ele inclui na outra lista. Se for false, não inclui.

// TESTE: function valor(value){
// TESTE:     return value >=10;
// TESTE: }
// TESTE: 
// TESTE: let arrayQualquer = [1,5,8,20,39,18,27,26];
// TESTE: let outraArray = arrayQualquer.filter(valor)
// TESTE: console.log(outraArray);

//// find() => funciona como o filter(), mas retorna somente o primeiro valor.

// TESTE: let outraArrayQualquer = arrayQualquer.find(valor);
// TESTE: console.log(outraArrayQualquer);

//// findIndex() => mesma coisa que o find(), porém retorna o index desse elemento.

// TESTE: let outraOutraArrayQualquer = arrayQualquer.findIndex(valor);
// TESTE: console.log(outraOutraArrayQualquer);

//// indexOf() => retorna o index de determinado elemento em uma array. Se esse elemento não estiver na array, retorna -1.

// TESTE: console.log(arrayQualquer.indexOf(5));
// TESTE: console.log(arrayQualquer.indexOf(2));

//// lastIndexOf() => funciona como o indexOf(), porém retorna a última ocorrência desse elemento.

// let lista = [1,2,4,6,8,5,6,4,2,3,2,1];
// console.log(lista.lastIndexOf(2));

//// forEach() => executa uma função para cada elemento da array, de forma individual. Não altera a array original nem retorna um valor.

// TESTE: let umaArray = [5,7,6];
// TESTE: function soma(element, index, array){
// TESTE:     console.log(`seu elemento é ${element}, o index é ${index} e a array usada é [${array}]`);
// TESTE: }
// TESTE: 
// TESTE: umaArray.forEach(soma);

//// pop() = retira o último elemento da array, alterando ela. 
//// shift() => mesma coisa que o pop(), mas com o primeiro elemento.

// TESTE: let arr = [2,7,6];
// TESTE: arr.pop();
// TESTE: arr.shift();
// TESTE: console.log(arr);

//// push(elemento) => adiciona um elemento na última posição, modificando a array original.
 
// TESTE: let arr = [1,2,3];
// TESTE: arr.push(4);
// TESTE: console.log(arr);

//// unshift() => funciona igual ao push(), porém adiciona o elemento no começo da array, modificando todos os indexes. Altera a array original

// TESTE: let arr = [2,3,4];
// TESTE: arr.unshift(1);
// TESTE: console.log(arr);

//// reduce() => recebe uma função callback e o valor inicial do acumulador . A função callback recebe 2 parâmetros (acumulador e o elemento da array). Se o acumulador não for definido, o primeiro elemento da array é definido como acumulador da função reduce().

// TESTE: const numbers = [175, 50, 25];
// TESTE: 
// TESTE: function myFunc(total, num) {
// TESTE:   return total - num;
// TESTE: }
// TESTE: 
// TESTE: const newNumbers = numbers.reduce(myFunc);
// TESTE: 
// TESTE: console.log(newNumbers);

//// reduceRight() => mesma coisa que o reduce, porém começa no final da array.
//// OBS: Os métodos reduce() e reduceRight() são sempre crescentes e decrescentes, respectivamente, na questão dos indexes.

//// slice(início: Optional, fim: Optional) => copia a array no intervalo determinado pelos parâmetros. Não inclui o elemento de index igual ao parâmetro "fim".

// TESTE: let arrUm = [1,2,3];
// TESTE: let arrDois = arrUm.slice(0,2);
// TESTE: 
// TESTE: console.log(arrDois);

//// sort() => organiza os elementos de uma array de acordo com a classificaçao Unicode (UTF-8).

// TESTE: let arrUm = [1,3,5,4,6,8,7,9];
// TESTE: console.log(arrUm.sort());  

//// splice(começo, quantidade, oQueInsere) => Consegue remover um ou mais elementos e colocar um ou mais elementos de acordo com o index.

// TESTE: const numbers = [1,2,3,4,5,6];
// TESTE: numbers.splice(2,2,7);
// TESTE: console.log(numbers);

