/*

  Aula 1:
  Encontre a solução ao problema:

  Pergunte o nome do usuário e escreva a mensagem:
  "Olá, [nome do usuário]"


let nome = prompt("Qual o seu nome?")
alert("Olá, " + nome) */

/* 
  Aula 2:

  Solicite 2 números, faça a soma deles
  e apresente o resultado final ao usuário


let numberOne = Number(prompt("Qual o primeiro número?"));
let numberTwo = Number(prompt("Qual o segundo número?"));
let soma = numberOne + numberTwo;

alert("A soma dos números é " + soma);
*/

/*
  Aula 3:
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let numberOne = prompt("Qual o primeiro número?");
let numberTwo = prompt("Qual o segundo número?");

numberOne = Number(numberOne);
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo;
let sub = numberOne - numberTwo;
let mult = numberOne * numberTwo;
let div = numberOne / numberTwo;
let restDiv = numberOne % numberTwo;

alert("A soma dos números é " + sum);
alert("A subtração dos números é " + sub);
alert("A multiplicação dos números é " + mult);
alert("A divisão dos números é " + div);
alert("O resto da divisão dos números é " + restDiv);