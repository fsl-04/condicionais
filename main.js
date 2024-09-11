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

function questao2() {
    let nome = prompt("Digite seu nome: ").toUpperCase();
    let sexo = prompt("Digite sua (M)asculino ou (F)eminino: ").toUpperCase();
    let estadoCivil = prompt("Digite seu estado civil:").toUpperCase();
    if (sexo === "F" && estadoCivil === "CASADA") {
        let tempoCasada = prompt("Digite o tempo de casada (anos): ");
        resultado = 
        `
        Nome: ${nome}
        Sexo: ${sexo}
        Estado Civil: ${estadoCivil}
        Tempo de casada: ${tempoCasada} anos
        `;
    } else {
        resultado = 
        `
        Nome: ${nome}
        Sexo: ${sexo}
        Estado Civil: ${estadoCivil}
        `;
    }
    document.getElementById("resultado2").innerHTML = resultado;
}

function questao3() {
    let numero = parseInt(prompt("Digite um número: "));
    let resultado = (numero % 2 === 0) ? `O número ${numero} é par` : `O número ${numero} é ímpar`;
    document.getElementById("resultado3").innerHTML = resultado;
}

