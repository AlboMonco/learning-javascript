let lista = [{
    nome: "Enzo",
    idade: 17
},
{
    nome: "Marta",
    idade: 55,
},
{
    nome: "Antonio",
    idade: 23,
},
{
    nome: "Maria Inês",
    idade: "18",
},
{
    nome: "Mariane",
    idade: 53,
},
{
    nome: "Carlos",
    idade: 55,
},
{
    nome: "Álvaro",
    idade: 51,
},
{
    nome: "Elizabete",
    idade: "50",
}
];

let listaNomes = [];

function criaListaNomes(){
    for (let i = 0; i < lista.length; i++){
        for (let key in lista[i]){
            if (key === "nome"){
                listaNomes.push(lista[i]["nome"])
            }
        }
    }
};

criaListaNomes();
console.log(listaNomes);

// ...stringQualquer retorna numa array cada caracter da string.



// spread pode ser usado de várias formas:
// const pessoa = {
//      nome: "Enzo",             
//      idade: 17,
//      parentesco:"primo",
//      profissão:"Desenvolvedor Back-End",
// };
//  
// const pessoaComTelefone = {
//      ...pessoa, telefone: "21972883686"   
// };
// 
// const { idade } = pessoa; // idade = pessoa.idade; 
//  
// function imprimeDados({nome, idade}){
//      console.log(nome,idade);      
// };   
//  
// imprimeDados(pessoa); // "Enzo" 17 
//  
//  
//  
//  
//  
//  
//  