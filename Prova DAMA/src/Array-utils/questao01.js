const leitor = require  ('prompt-sync') ()

function salarioLiquido() {
    
    let salarioBruto = leitor (console.log('Informe o salário bruto: ')) 

    let salarioDesconto1 = salarioBruto - (salarioBruto * 0.10) ;

    let salarioDesconto2 = salarioDesconto1 - (salarioDesconto1 * 0.05);

    console.log(`O salario é ${salarioDesconto2}`)
}

module.exports = {
    salarioLiquido
}