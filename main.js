function questao1() {
    let A = parseFloat(prompt("Digite o valor de A:").replace(",", "."));
    let B = parseFloat(prompt("Digite o valor de B:").replace(",", "."));
    let C = parseFloat(prompt("Digite o valor de C:").replace(",", "."));
    if (A + B < C) {
        resultado = ("A soma de A + B é menor que C");
    } document.getElementById("resultado1").innerText = resultado;
}

function questao2() {
    let nome = prompt("Digite seu nome:").toUpperCase();
    let sexo = prompt("Digite sua sexo (F/M):").toUpperCase();
    let estadoCivil = prompt("Digite seu estado civil:").toUpperCase();
    if (sexo === "F" && estadoCivil === "CASADA") {
        let tempoCasada = prompt("Digite o tempo de casada (anos):");
        resultado = `Nome: ${nome}
        Sexo: ${sexo}
        Estado Civil: ${estadoCivil}
        Tempo de casada: ${tempoCasada} ANOS`;
    } else {
        resultado = `Nome: ${nome}
        Sexo: ${sexo}
        Estado Civil: ${estadoCivil}`;
    }
    document.getElementById("resultado2").innerText = resultado;
}

function questao3() {
    let numero = parseInt(prompt("Digite um número qualquer:"));
    let resultado = (numero % 2 === 0)
        ? `O número ${numero} é par`
        : `O número ${numero} é impar`;
    document.getElementById("resultado3").innerText = resultado;
}

function questao4() {
    let A = parseInt(prompt("Digite o valor de A:"));
    let B = parseInt(prompt("Digite o valor de B:"));
    let C = 0;
    if (A === B) {
        C = A + B;
    } else {
        C = A * B;
    }
    let resultado = `O valor de C é: ${C}`;
    document.getElementById("resultado4").innerText = resultado;
}

function questao5() {
    let numero = parseFloat(prompt("Digite um número:"));
    let resultado = (numero >= 0)
        ? `O dobro do número é: ${2 * numero}`
        : `O triplo do número é: ${3 * numero}`;
    document.getElementById("resultado5").innerText = resultado;
}

function questao6() {
    let valor1 = prompt("Digite o primeiro valor booleano (true/false):").toLowerCase();
    let valor2 = prompt("Digite o segundo valor booleano (true/false):").toLowerCase();
    let resultado;
    if (valor1 === 'true' && valor2 === 'true') {
        resultado = "Ambos são VERDADEIROS";
    } else if (valor1 === 'false' && valor2 === 'false') {
        resultado = "Ambos são FALSOS";
    } else {
        resultado = "Pelo menos um dos valores é FALSO";
    }
    document.getElementById("resultado6").innerText = resultado;
}

function questao7() {
    let numero = parseFloat(prompt("Digite um número:"));
    let resultado = (numero % 2 === 0)
        ? `O resultado da soma é: ${numero + 5}`
        : `O resultado da soma é: ${numero + 8}`;
    document.getElementById("resultado7").innerText = resultado;
}

function questao8() {
    let valores = [];
    valores.push(parseInt(prompt("Digite o primeiro valor:")));
    valores.push(parseInt(prompt("Digite o segundo valor:")));
    valores.push(parseInt(prompt("Digite o terceiro valor:")));
    valores.sort((a, b) => b - a);
    let resultado = `Os valores em ordem decrescente são: ${valores.join(", ")}`;
    document.getElementById("resultado8").innerText = resultado;
}

function questao9() {
    let altura = parseFloat(prompt("Digite sua altura (em metros):").replace(",", "."));
    let sexo = prompt("Digite seu sexo (M/F):").toUpperCase();
    let pesoIdeal;
    if (sexo === "M") {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo === "F") {
        pesoIdeal = (62.1 * altura) - 44.7;
    } else {
        pesoIdeal = "Sexo inválido.";
    }
    let resultado = `O peso ideal é: ${pesoIdeal.toFixed(2)}`;
    document.getElementById("resultado9").innerText = resultado;
}

function questao10() {
    let peso = parseFloat(prompt("Digite seu peso (em kg):").replace(",", "."));
    let altura = parseFloat(prompt("Digite sua altura (em metros):").replace(",", "."));
    let imc = peso / (altura * altura);
    let condicao;
    if (imc < 18.5) {
        condicao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        condicao = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        condicao = "Acima do peso";
    } else {
        condicao = "Obeso";
    }
    let resultado = `O IMC é: ${imc.toFixed(2)}
    Condição: ${condicao}`;
    document.getElementById("resultado10").innerText = resultado;
}

function questao11() {
    let preco = parseFloat(prompt("Digite o preço do produto:").replace(",", "."));
    let condicaoPagamento = parseInt(prompt("Digite o código da condição de pagamento (1-4):"));
    let total;
    switch (condicaoPagamento) {
        case 1:
            total = preco * 0.9;
            break;
        case 2:
            total = preco * 0.85;
            break;
        case 3:
            total = preco;
            break;
        case 4:
            total = preco * 1.1;
            break;
        default:
            total = "Código inválido.";
    }
    let resultado = `O total a ser pago é: ${total.toFixed(2)}`;
    document.getElementById("resultado11").innerText = resultado;
}

function questao12() {
    let id = prompt("Digite o número de identificação do aluno:");
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));
    let mediaExercicios = parseFloat(prompt("Digite a média dos exercícios:"));
    
    // Cálculo da média de aproveitamento
    let mediaAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios) / 7;
    
    let conceito;
    
    // Verificação do conceito
    if (mediaAproveitamento >= 9) {
        conceito = "A";
    } else if (mediaAproveitamento >= 7.5) {
        conceito = "B";
    } else if (mediaAproveitamento >= 6) {
        conceito = "C";
    } else if (mediaAproveitamento >= 4) {
        conceito = "D";
    } else {
        conceito = "E";
    }
    
    // Verificação do status (aprovado/reprovado)
    let status = (conceito === "A" || conceito === "B" || conceito === "C") ? "Aprovado" : "Reprovado";
    
    // Formatação do resultado
    let resultado = `Aluno ID: ${id}, 
    Notas: ${nota1}, ${nota2}, ${nota3}, 
    Média dos exercícios: ${mediaExercicios}, 
    Média de aproveitamento: ${mediaAproveitamento.toFixed(2)}, 
    Conceito: ${conceito}, 
    Status: ${status}.`;
    
    // Exibição do resultado
    document.getElementById("resultado12").innerText = resultado;
}

