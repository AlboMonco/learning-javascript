//var 
// Function scope, pode ser reassign, pode ser redeclared e pode ser declarada depois do uso
// var altura = 5;
// var comprimento = 7;
// 
// area = altura * comprimento;
// console.log(area);
// var area;

// let
// Block scope, não pode ser reassign, pode ser redeclared e não pode ser declarada depois.
// let forma = "Retângulo";
// let altura = 5;
// let comprimento = 7;
// 
// if (forma === "Retângulo"){
//     area = altura * comprimento
// } else{
//     area = altura * comprimento/2
// }

// console.log(area)
// let area;

//const
// Block scope, não pode ser reassign, não pode ser redeclared, não pode ser declarada depois e deve ser definida com um valor.

const forma = "quadrado";            // Boa prática colocar a variável como comentada se não estiver usando-a.
const altura = 5;
const comprimento = 7;
let area;

if (forma === "quadrado"){
    area = altura * comprimento;    
} else {
    area = (altura * comprimento)/2;
}
console.log(area)