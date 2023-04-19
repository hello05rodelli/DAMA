const prompt = require('prompt-sync')();

console.log('Informe o 1º numero: ');
let num1 = prompt();

console.log('Informe o 2º numero: ');
let num2 = prompt();

console.log('Informe o 3º numero: ');
let num3 = prompt();

let numeros = [num1, num2, num3];

numeros = numeros.sort((prim, segun) => prim - segun);

console.log(numeros)

