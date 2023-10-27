// 1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;
document.write("<br/> <br/> <strong>Exercicio 1</strong> <br/>")

let menorAltura = Number.MAX_VALUE; 
let maiorAltura = Number.MIN_VALUE; 

for (let i = 1; i <= 15; i++) {
    const altura = Number(prompt("Digite a altura da pessoa " + i + " (em metros):"));

    if (altura < menorAltura) {
        menorAltura = altura;
    }
    if (altura > maiorAltura) {
         maiorAltura = altura;
    }
}

document.write("<br/> A menor altura do grupo é: " + menorAltura.toFixed(2) + " metros.");
document.write("<br/> A maior altura do grupo é: " + maiorAltura.toFixed(2) + " metros.");

// 2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.
document.write("<br/> <br/> <strong>Exercicio 2</strong> <br/>")

let pedroAltura = 150;
let lucasAltura = 110;
let crescimentoPedro = 2;
let crescimentoLucas = 3;
let anos = 0;


while (pedroAltura >= lucasAltura) {
    pedroAltura += crescimentoPedro;
    lucasAltura += crescimentoLucas;
    anos++;
}
document.write(`<br/> Lucas e Pedro alcançaram o mesmo tamanho em ${anos - 1}`)
document.write(`<br/> Lucas será maior que Pedro ${anos}`)

// 3. Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
document.write("<br/> <br/> <strong>Exercicio 3</strong> <br/>")

let numeroTabuada = 8 //Number(prompt("Digite o número para a tabuada:"));
let iteracoes = 9 //Number(prompt("Digite o número de iterações desejado:"));

for (let i = 0; i <= iteracoes; i++) {
    document.write(`<br/> ${i} x ${numeroTabuada} = ${i * numeroTabuada}`);
}

// // 4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
// // e verifique quais números são múltiplos de 3 e quais são múltiplos
// // de 5.
document.write("<br/> <br/> <strong>Exercicio 4</strong> <br/>")

let multiplo3 = ""
let multiplo5 = ""

for (let num = 1; num <= 250; num++) {
    if (num % 3 === 0) {
        multiplo3 += num + ", ";
    } 
    else if (num % 5 === 0) {
        multiplo5 += num + ", ";
    }
}
document.write(`<br/> Divisivel por 3: ${multiplo3}`)
document.write(`<br/> <br/> Divisivel por 5: ${multiplo5}`)

// // 5. Faça um programa usando a estrutura “for” que leia um número
// // inteiro positivo e mostre na tela uma contagem de 0 até o valor
// // digitado:
// // Ex: Digite um valor: 9
// // Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!
document.write("<br/> <br/> <strong>Exercicio 5</strong> <br/>")

let numero = 20;
let mensagem = "Contagem: "

for (let i = 0; i <= numero; i++) {
    console.log(i);
    mensagem += i + ", ";
}
document.write(`<br/> ${mensagem}`);
    


// // 6. Desenvolva um algoritmo que mostre uma contagem regressiva de
// // 30 até 1, marcando os números que forem primos, exatamente
// // como mostrado abaixo:
// // 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...
document.write("<br/> <br/> <strong>Exercicio 6</strong> <br/>")

let contagem = "";

for (let i = 30; i >= 1; i--) {
    let primo = true;
    for(c = 2; c < i; c++) {
        if (i % c === 0) {
            primo = false;
            break;
        }
    }
    if (primo) {
        contagem += `[${i}] ,`
    } else {
        contagem += i + ", "
    }
}

document.write(`<br/> ${contagem}`);

// 7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.
document.write("<br/> <br/> <strong>Exercicio 7</strong> <br/>")


let totalSomado = 0
let numerosPositivos = 0
let numerosNegativos = 0

for (let i = 0; i <= 10; i++) {
    let lerNumero = Number(prompt("Digite um número positivo e/ou negativo:"));
    totalSomado += lerNumero

    if (lerNumero >= 0) {
        numerosPositivos++
    } else {
        numerosNegativos++
    }
}

let mediaNumeros = totalSomado / 10
let porcentagemPositivos = (numerosPositivos / 10) * 100
let porcentagemNegativos = (numerosNegativos / 10) * 100

document.write(`<br/> Média aritimetica: ${mediaNumeros}`)
document.write(`<br/> Total de número Positivos: ${numerosPositivos}`);
document.write(`<br/> Total de números Negativos: ${numerosNegativos}`);
document.write(`<br/> Média de números Positivos: ${porcentagemPositivos}`);
document.write(`<br/> Média de números Negativos: ${porcentagemNegativos}`);