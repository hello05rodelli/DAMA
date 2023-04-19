const prompt = require('prompt-sync')();

console.log('Informe o valor de A: ');
let a = Number(prompt());

console.log('Informe o valor de B: ');
let b = Number(prompt());

console.log('Informe o valor de C: ');
let c = Number(prompt());

if ((a + b) < c){
    console.log ('Menor que C')
}else if ((a + b) > c){
    console.log ('Maior que C')
}else {
    console.log ('Igual a C')
}