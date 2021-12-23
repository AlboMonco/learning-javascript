const reducer = (number1,number2) => {number1 + number2};

function fibonacci (value){
    let fibo = [1,2];
    for (let i = 0; i < value; i++){
        if (i === Number(fibo[fibo.length - 1] + fibo[fibo.length -2])){
            fibo.push(i)
        } 
    }
    return fibo;
}

function soma(){
    let soma = 0;
    let listFibonacci = fibonacci(4000000);
    for (let i = 0; i < listFibonacci.length; i++){
        if (listFibonacci[i]%2 === 0){
            soma += listFibonacci[i]
        }
    }
    return soma;
}


console.log(soma());