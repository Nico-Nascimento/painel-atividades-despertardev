//exercicio 1
document.write("<br/> <br/> <strong>Exercicio 1</strong> <br/>")

const idade = 26;
document.write(`Minha idade é ${idade} anos.<br/>`)

// exercicio 2
document.write("<br/> <strong>Exercicio 2</strong> <br/>")

const num1 = 10;
const num2 = 20;
const soma = num1 + num2
document.write(`O resultado da soma de ${num1} e ${num2} é ${soma} <br/>`)

//exercicio 3
document.write("<br/> <strong>Exercicio 3</strong> <br/>")

const total = 200;
const parcela = 24;
const valorParcela = total / parcela;
document.write(`O valor total da compra foi R$ ${total.toString().replace('.', ',')} <br/>`)
document.write(`Forma de pagamento ${parcela}x de R$${valorParcela.toFixed(2).toString().replace('.', ',')} <br/>`)

//exercicio 4
document.write("<br/> <strong>Exercicio 4</strong> <br/>")

const totalMin = 60;
const totalSec = totalMin * 60;
document.write(`${totalMin} minutos equivale à ${totalSec} segundos! <br/>`)

//exercicio 5
document.write("<br/> <strong>Exercicio 5</strong> <br/>")

const nomeAluno = "Nicolas Nascimento";
const nota1 = 6;
const nota2 = 10;
const nota3 = 10;
const media = (nota1 + nota2 + nota3) / 3;
document.write(`O aluno ${nomeAluno} ficou com média ${media.toFixed(1).replace(".",",")} <br/>`)

//exercicio 6
document.write("<br/> <strong>Exercicio 6</strong> <br/>")

let A = 10;
let B = 20;
let troca = A;
A = B;
B = troca;

document.write(`Valor em A: ${A} e Valor em B: ${B} <br/>`)

//exercicio 7
document.write("<br/> <strong>Exercicio 7</strong> <br/>")

const votosTotal = 200
const votosBrancos = 20
const votosNulos = 10

const percentualBrancos = (votosBrancos / votosTotal) * 100;
const percentualNulos = (votosNulos / votosTotal) * 100;
const votosValidos = ((votosTotal - (votosNulos + votosBrancos)) / votosTotal) *100;

document.write(`percentual de votos validos é ${votosValidos.toFixed(2)}%, percentual de votos nulos é ${percentualNulos.toFixed(2)}% e o percentual de votos brancos é ${percentualBrancos.toFixed(2)}%<br/>`);

// //exercicio 8
document.write("<br/> <strong>Exercicio 8</strong> <br/>")

let valor1 = 50
let valor2 = 150

if(valor1 === valor2) {
    document.write(`Números iguais! <br/>`)
} else if (valor1 > valor2) {
    document.write(`O primeiro número é maior! <br/>`)
} else {
    document.write(`O segundo número é maior! <br/>`)
}

//exercicio 9
document.write("<br/> <strong>Exercicio 9</strong> <br/>")

const numeroDeMaca = 6;
const precoMenorDuzia = 0.30;
const precoMaiorDuzia = 0.25;

let valorTotal;

if (numeroDeMaca < 12) {
    valorTotal = numeroDeMaca * precoMenorDuzia;
} else {
    valorTotal = numeroDeMaca * precoMaiorDuzia;
}

document.write(`Valor total da compra: R$${valorTotal.toFixed(2).replace(".",",")} <br/>`);
 
//exercicio 10
document.write("<br/> <strong>Exercicio 10</strong> <br/>")

const name1 = "Nicolas";
const age = 26;
const anoNascimento = 2023 - age;

document.write(`Nome: ${name1} | Idade:${idade} | Nasceu em ${anoNascimento} <br/>`)

//exercicio 11
document.write("<br/> <strong>Exercicio 11</strong> <br/>")

const numero = parseInt(20.2);

if (numero > 0) {
    if (numero % 2 === 0) {
        document.write("Número é par! <br/>");
    } else {
        document.write("Número é ímpar! <br/>");
    }
} else {
    document.write("O número informado não é positivo. <br/>");
}

//exercicio 12
document.write("<br/> <strong>Exercicio 12</strong> <br/>")

const anoAtual = 2023;
const anoNascimento2 = 2010;

const idade2 = anoAtual - anoNascimento2;

if (idade2 >= 16) {
    document.write(`Você pode votar este ano! <br/>`)
} else {
    document.write(`Você não pode votar nesse ano. <br/>`)
}