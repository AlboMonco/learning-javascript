function isMultiple(value){
    let sum = 0;
    for (let i = 0; i <= value; i++){
        if (i%3 ===0 || i%5 ===0){
            sum += i;
        }
    }
    return sum;
}

console.log(isMultiple(1000));