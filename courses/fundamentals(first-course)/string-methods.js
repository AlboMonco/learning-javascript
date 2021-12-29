// toLowerCase() -> bota tudo minúsculo 
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input.toLowerCase());


// .length -> retorna o tamanho da string

const senha = "MinhaSenha123";

console.log(senha.length);

//// split() 
// TESTE: let linguagens = "JavaScript;Java;C#;PHP;Python;Go;Vb;SQL;C;C++";
// TESTE: let arrayLinguagens = linguagens.split(";");
// TESTE: console.log(arrayLinguagens) //[ 'JavaScript',
//   'Java',
//   'C#',
//   'PHP',
//   'Python',
//   'Go',
//   'Vb',
//   'SQL',
//   'C',
//   'C++' ]

//// trim() => remove os espaços em branco no início ou no fim de uma string.

// TESTE:
// TESTE: let login = "   andre@emailteste.com      ";
// TESTE: let loginSemEspaco = login.trim();
// TESTE: console.log(loginSemEspaco); //andre@emailteste.com

//// charAt(index) => retorna o character da string no index

