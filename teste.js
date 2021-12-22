const numbers = [175, 50, 25];

function myFunc(total, num) {
  return total - num;
}

const newNumbers = numbers.reduce(myFunc);

console.log(newNumbers);
