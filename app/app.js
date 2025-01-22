function calcularJurosComposto(valor, tempo_em_meses, taxaAoMes){
    let taxa = taxaAoMes/100;

    let valorFinal = valor * Math.pow((1+taxa), tempo_em_meses)
    
    return valorFinal.toFixed(2);
}

function receberValores(){
    let valor = parseFloat(prompt("Digite o valor Inicial (R$):"))
    let taxaAoMes = parseFloat(prompt("Digite a taxa de juros (% ao mes):"))
    let tempo_em_meses = parseFloat(prompt("Digite o tempo (em Meses):"))
    
    if (isNaN(valor) || isNaN(taxaAoMes) || isNaN(tempo_em_meses) || valor <= 0 || taxaAoMes <= 0 || tempo_em_meses <= 0) {
        console.log("Por favor, insira valores válidos.");
        return;
    }

    let resultado = calcularJurosComposto(valor, tempo_em_meses, taxaAoMes);
    prompt(`O valor final, após ${tempo_em_meses.toFixed(0)} meses, é de ${resultado}`)
}

receberValores();