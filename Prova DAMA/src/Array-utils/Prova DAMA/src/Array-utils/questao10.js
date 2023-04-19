const prompt = require('prompt-sync')();

console.log('Escreva uma frase');
let f = prompt()

f = f.toLocaleLowerCase()

let aS = 0;

for (let c = 0; c < f.length; c++) {
    if (f[c] == 'a') {
        aS++;
    }
}

console.log('O total de letras "A" é igual a: ' + aS)