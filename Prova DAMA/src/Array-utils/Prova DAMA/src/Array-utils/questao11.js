const prompt = require('prompt-sync')();

console.log('Escreva uma frase');
let f = prompt()

f = f.toLocaleLowerCase()

let s = 0;

for (let c = 0; c < f.length; c++) {
    if (f[c] == 'j') {
        s = c = +1;
        break
    }
    if (c == f.length){
        s = -1;
        break
    }
} if (s>=0) {

console.log('Existe um j na posição: ' + s)
} else{
    console.log('Não existe um j na frase')
}