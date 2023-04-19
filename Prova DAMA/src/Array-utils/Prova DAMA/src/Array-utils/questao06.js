const prompt = require('prompt-sync')();

console.log('Informe a nota da prova de Potuguês: ');
let provaP = Number(prompt());

console.log('Informe a nota da prova de Matemática: ');
let provaM = Number(prompt());

console.log('Informe a nota da prova de Conhecimentos Gerais:');
let provaCG = Number(prompt());

let media = (provaP + provaM + provaCG) /3;
console.log('A média é: '+ media) 

if (media>7 && (provaP>= 5 && provaM>=5 && provaCG>= 5)){ 
    console.log('Aprovado')
}else{
    console.log('Reprovado')
}