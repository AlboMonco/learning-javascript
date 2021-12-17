arrayNumeros = [1, 2, 3, 4];
// novaArray = arrayNumeros.concat([2, 3, 4]);

// console.log(novaArray);

function pegaArray(value){
    return value >= 2
}

console.log(arrayNumeros.filter(pegaArray))
