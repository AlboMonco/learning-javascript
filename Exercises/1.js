function multipleThreeAndFive(reach){
    numbersInReach = [];
    for (let number = 0; number<=reach; number++){
        if (number%3 == 0 || number%5 == 0){
            numbersInReach.push(number);
        }
    }
    return numbersInReach;
}


console.log(multipleThreeAndFive(100));
