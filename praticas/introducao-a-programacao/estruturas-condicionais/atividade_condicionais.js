// // 1. Escreva um algoritmo para ler uma temperatura em graus Celsius,
// // calcular e escrever o valor correspondente em graus Fahrenheit.
document.write("<br/> <br/> <strong>Exercicio 1</strong> <br/>")

const celsius = 2;
const fahrenheit = (celsius * 9/5) + 32;

document.write(`O valor em Fahrenheit é: ${fahrenheit}`);


// // 2. Crie um programa que peça um número de 1 a 7 e exiba o dia da
// // semana correspondente utilizando a estrutura condicional switch.
document.write("<br/> <br/> <strong>Exercicio 2</strong> <br/>")

const numeroDia = Number(prompt("Digite um número de 1 a 7 para o dia da semana:"));

let diaDaSemana;

switch (numeroDia) {
  case 1:
    diaDaSemana = "Domingo";
    break;
  case 2:
    diaDaSemana = "Segunda-feira";
    break;
  case 3:
    diaDaSemana = "Terça-feira";
    break;
  case 4:
    diaDaSemana = "Quarta-feira";
    break;
  case 5:
    diaDaSemana = "Quinta-feira";
    break;
  case 6:
    diaDaSemana = "Sexta-feira";
    break;
  case 7:
    diaDaSemana = "Sábado";
    break;
  default:
    alert("Numero inválio");
    break;
}

document.write(`O dia da semana é: ${diaDaSemana}`)

// // 3. Crie um programa que peça um número e verifique se ele é positivo,
// // negativo ou zero.
document.write("<br/> <br/> <strong>Exercicio 3</strong> <br/>")

const numero = Number(prompt("Digite um número positivo ou negativo:"));

if (numero > 0) {
  document.write(`O número ${numero} é positivo.`);
} else if (numero < 0) {
  document.write(`O número é  ${numero} negativo.`);
} else {
    document.write("O número é zero.");
}

// // 4. O custo de um carro novo ao consumidor é a soma do custo de
// // fábrica com a porcentagem do distribuidor e dos impostos
// // (aplicados ao custo de fábrica). Supondo que o percentual do
// // distribuidor seja de 28% e os impostos de 45%, escrever um
// // algoritmo para ler o custo de fábrica de um carro,calcular e escrever
// // o custo final ao consumidor.
document.write("<br/> <br/> <strong>Exercicio 4</strong> <br/>")

const custoDaFabrica = Number(prompt("Digite o custo de fábrica do carro:"));

const valorDistribuidor = 0.28;
const valorImpostos = 0.45;

const valorConsumidor = custoDaFabrica + (custoDaFabrica * valorDistribuidor) + (custoDaFabrica * valorImpostos);

document.write(`O custo final do veículo será de: ${valorConsumidor} reais.`);


// // 5. Desenvolva um algoritmo que faça o cálculo do índice de massa
// // corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
// // que digite sua altura, em seguida solicitar que digite seu peso e que
// // lhe exiba o status. O status vai variar da seguinte forma:
// // a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
// // “Você está abaixo da faixa de peso ideal”;
// // b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
// // “Você está acima da faixa de peso ideal”;
// // c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
// // 24,99, o status a ser mostrado será “Você está dentro da faixa
// // de peso ideal”.
document.write("<br/> <br/> <strong>Exercicio 5</strong> <br/>")

const peso = Number(prompt("Digite seu peso:"));
const altura = Number(prompt("Digite sua altura:"));

const calculoImc = peso / (altura * altura);

if (calculoImc < 18.5) {
    document.write(`Você está abaixo da faixa de peso ideal! Seu IMC é de: ${calculoImc.toFixed(2)}`)
} else if (calculoImc > 24.99){
    document.write(`Você está acima da faixa de peso ideal! Seu IMC é de: ${calculoImc.toFixed(2)}`)
} else {
    document.write(`Você está dentro da faixa de peso ideal! Seu IMC é de: ${calculoImc.toFixed(2)}`)
};


// // 6. Escreva um algoritmo que solicite 2 números e uma operação
// // matemática. O algoritmo deve realizar o cálculo com os 2 números
// // digitados conforme a operação informada.
document.write("<br/> <br/> <strong>Exercicio 6</strong> <br/>")

const numero1 = Number(prompt("Digite o primeiro número:"));
const operacao = prompt("Escolha a operação desejada (+, -, *, /):");
const numero2 = Number(prompt("Digite o segundo número:"));

let resultado;

switch (operacao) {
  case "+":
    resultado = numero1 + numero2;
    break;
  case "-":
    resultado = numero1 - numero2;
    break;
  case "*":
    resultado = numero1 * numero2;
    break;
  case "/":
    if (numero2 !== 0) {
      resultado = numero1 / numero2;
    } else {
      resultado = "Erro: Divisão por zero.";
    }
    break;
  default:
    resultado = "Operação inválida.";
    break;
}

document.write(`Resultado: ${resultado}`);
 



// // 7. Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
// // a conta do usuário deve ser criada já com um saldo positivo. O
// // usuário precisa informar a quantidade de dinheiro que deseja
// // retirar, esse valor deve ser um número positivo, múltiplo de 5 e
// // menor do que o saldo. Cada saque eletrônico cobra uma taxa de
// // R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
// // certo com o saque, e se o usuário informar um valor maior que o
// // saldo deve ser informado ao usuário que o mesmo não tem dinheiro
// // suficiente em conta para realizar o saque.
// // OBS: Na verificação se o valor do saque é maior que o saldo deve
// // ser considerado e também contabilizado o valor da taxa a ser
// // cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
// // da taxa do saque não pode ser maior que o saldo disponível.
document.write("<br/> <br/> <strong>Exercicio 7</strong> <br/>")

let valorSaldo = 2000;

const valorSaque = Number(prompt("Digite o valor que deseja sacar que seja múltiplo de 5:"));

if (valorSaque > 0 && valorSaque % 5 === 0) {
  const taxaSaque = 4.5;
  const valorTotalSaque = valorSaque + taxaSaque;

  if (valorTotalSaque <= valorSaldo) {
    valorSaldo -= valorTotalSaque;
    document.write(`<br/> Saque de R$ ${valorSaque.toFixed(2)} efetuado com sucesso.`);
    document.write(`<br/><br/> Taxa de saque de R$ ${taxaSaque.toFixed(2)}`);
    document.write(`<br/><br/> Saldo disponível: R$ ${valorSaldo.toFixed(2)}`);
  } else {
    document.write("<br/><br/> Você não possui saldo suficiente ");
  }
} else {
  alert("Valor de saque inválido. Certifique-se de que seja um número múltiplo de 5.");
}


// 8. Faça um algoritmo que leia a idade e peso de um atleta e imprima
// a sua categoria, de acordo com a seguinte tabela:
document.write("<br/> <br/> <strong>Exercicio 8</strong> <br/>")

const idade = Number(prompt("Qual sua idade?"));
const peso2 = Number(prompt("Quanto você pesa?"));

let categoria;
let categoriaPeso;

if (idade <= 12) {
  categoria = "Infantil";
  categoriaPeso = peso2;
} else if (idade > 12 && idade <= 16) {
  categoria = "juvenil";

  if (peso2 <= 40) {
    categoriaPeso = peso2;
    categoria = "<br>Juvenil leve";
  } else {
    categoriaPeso = peso2;
    categoria = "Juvenil Pesado";
  }
} else if (idade >= 17 && idade <= 24) {
  categoria = "senior";
  if (peso2 <= 45) {
    categoriaPeso = peso2;
    categoria = "Senior leve";
  } else if (peso2 >= 45 && peso2 <= 60) {
    categoriaPeso = peso2;
    categoria = "Senior Médio";
  } else {
    categoriaPeso = peso2;
    categoria = "Senior Pesado";
  }
} else {
  categoria = "Veterano";
  categoriaPeso = peso2;
}
document.write(`<br/><br/> Seu peso é ${categoriaPeso}Kg`);
document.write(`<br/><br/> Sua categoria é ${categoria}`);


// 9. Escreva um programa que pergunte a velocidade de um carro. Caso
// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// km acima da velocidade permitida.
document.write("<br/> <br/> <strong>Exercicio 9</strong> <br/>")

const velocidadeCarro = Number(prompt("Digite a velocidade do carro em Km/h:"));

if (velocidadeCarro > 80) {
  const velocidadeExcedida = velocidadeCarro - 80;
  const valorMulta = velocidadeExcedida * 5;

  document.write("<br/><br/> Você foi multado por excesso de velocidade!");
  document.write(`<br/><br/> Velocidade excedida: ${velocidadeExcedida} Km/h`);
  document.write(`<br/><br/> Valor da multa: R$${valorMulta.toFixed(2)}`);
} else {
  document.write("<br/><br/> Você está dentro do limite de velocidade permitido.");
}