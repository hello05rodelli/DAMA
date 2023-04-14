const leitor = require("prompt-sync")();

//function matriculaAluno () {
 
    let ano = leitor (console.log('Informe o ano: '))

    let semestre = leitor (console.log('Informe o semestre (1 ou 2): '))

    let aluno = leitor (console.log('Informe a ordem da matricula: '))

    if (semestre == '1') {
        console.log(`A matricula completa do aluno é: ${ano.substring(2)}1${leitor}${aluno}`)

        
    } else if (semestre == '2') {
        console.log(`A matricula completa do aluno é: ${ano.substring(2)}2${leitor}${aluno}`)

        
    }
//}



