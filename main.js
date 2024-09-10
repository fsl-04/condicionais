function questao1() {
    let A = parseFloat(prompt("Digite o valor de A: ").replace(",", "."));
    let B = parseFloat(prompt("Digite o valor de B: ").replace(",", "."));
    let C = parseFloat(prompt("Digite o valor de C: ").replace(",", "."));

    if (A + B < C) {
        resultado = ("A soma de A + B é menor que C");
        document.getElementById("resultado1").innerHTML = resultado;
    } else {
        resultado = ("A soma de A + B é maior que C");
        document.getElementById("resultado1").innerHTML = resultado;
    }
}
