const leitor = require  ('prompt-sync') ()

function combustivelCarro() {
    
    let tempo = leitor (console.log('Informe o tempo gasto na viagem em horas: ')) 

    let velocidade = leitor (console.log('Informe a velocidade do batmóvel em km/h: ')) 

    let distancia  = ( velocidade * tempo ) ;

    let litrosUsados = ( distancia/12)

    console.log(`A distancia percorrida é: ${distancia} km`)

    console.log(`O consumo de combustivel nessa viagem são: ${litrosUsados.toFixed(2)} L `)

}

module.export =  {

    combustivelCarro

}

