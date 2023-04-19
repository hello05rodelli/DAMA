const leitor = require("prompt-sync")();

//function matriculaAluno () {
 
    let ano = leitor ('Informe o ano: ')

    let semestre = leitor ('Informe o semestre (1 ou 2): ')

    let aluno = leitor ('Informe a ordem da matricula: ')
    console.log(`------------------------------`)
    console.log(`A matricula completa do aluno é: ${ano[2]+ano[3]}${semestre}${aluno}`) 
    console.log(`O ano em ele se matriculou é: ${ano} `)
    console.log(`O seu semestre é: ${semestre} `)
    console.log(`A ordem de matrícula é: ${aluno} `)   
    
//}



