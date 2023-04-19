const prompt = require('prompt-sync')();

let agencia = prompt('Digite a agência: ');

let numConta = 0;

for (let c = 0; c < agencia.length; c++) {
    numConta += parseInt(agencia.charAt(c))
    
}

    let d = numConta%10;

    if (agencia<=9999){
        console.log('Numero de conta completo: ' +"00" + agencia + "-" + d)
    }else{

    }

    