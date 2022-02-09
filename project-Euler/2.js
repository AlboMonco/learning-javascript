/*
    This code sum all the even fibonacci numbers, given a limit.
*/

function sumFibonacci(limit){
    
    let primeiroNumero = 1;
    let segundoNumero = 2;
    let terceiroNumero;

    let soma = 2;
    
    do {
        
        terceiroNumero = primeiroNumero + segundoNumero;
        primeiroNumero = segundoNumero;
        segundoNumero = terceiroNumero;
        

        if (terceiroNumero%2 == 0){
            soma += terceiroNumero;
        }
        
    } while (terceiroNumero <= limit);

    return soma;
}


console.log(sumFibonacci(4000000));