function folhaPagamento(valorHora,horasTrabalhadas) {
    let salarioBruto = valorHora * horasTrabalhadas

    let porcentagemIR = 20
    if(salarioBruto <= 900){
        porcentagemIR = 0
    } else if(salarioBruto <= 1500){
        porcentagemIR = 5
    } else if(salarioBruto <= 2500){
        porcentagemIR = 10
    }

    let impostoRenda = salarioBruto*porcentagemIR/100
    let inss = salarioBruto/10
    let fgts = salarioBruto*11/100
    let totalDescontos = impostoRenda + inss
    let salarioLiquido = salarioBruto - totalDescontos

    console.log(`

    Salário bruto (${valorHora.toFixed(2)} * ${horasTrabalhadas})    : R$ ${salarioBruto.toFixed(2)}

    ( - ) IR ( ${porcentagemIR}% )               : R$ ${impostoRenda.toFixed(2)}

    ( - ) INSS ( 10% )            : R$ ${inss.toFixed(2)}

    FGTS ( 11% )                  : R$ ${fgts.toFixed(2)}

    Total de descontos            : R$ ${totalDescontos.toFixed(2)}

    Salário Líquido               : R$ ${salarioLiquido.toFixed(2)}

    `)
}

folhaPagamento(5,220)