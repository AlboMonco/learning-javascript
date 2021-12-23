// primeiro passo: fazer uma função que verifica se um número é primo ou não. Input: valor; Output: True or False. (OK!)
// segundo passo: fazer uma função que retorna os fatores primos de um número. Input: valor; Output: array com os fatores primos.

function isPrime (valor){
    if (valor === 1){
        return false
    }
    let listPrimes = [];
    for (let i = 0; i <= Math.sqrt(valor); i++){
        if (valor%i === 0){
            listPrimes.push(i);
        }
    }
    if (listPrimes.length === 1){
        return true;
    } else{
        return false;
    }
}   

function fatoresPrimos (valor){
    if (isPrime(valor)){
        return valor;
    }
    for (let i = parseInt(Math.sqrt(valor)); i >= 1; i--){
        if (valor%i === 0 && isPrime(i)){
            return i;
        }
    }
}

console.log(fatoresPrimos(28));
console.log(fatoresPrimos(13195));
console.log(fatoresPrimos(600851475143));

