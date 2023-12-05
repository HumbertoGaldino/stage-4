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
*/

/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let nameStudent = prompt("Qual o nome do(a) estudante?");
let firstGrade = prompt("Digite a primeira nota do bimestre do(a) estudante " + nameStudent);
let secondGrade = prompt("Digite a segunda nota do bimestre do(a) estudante " + nameStudent);
let thirdGrade = prompt("Digite a terceira nota do bimestre do(a) estudante " + nameStudent);
let average = (Number(firstGrade) + Number(secondGrade) + Number(thirdGrade)) / 3;

average = average.toFixed(2)

let result = average >= 6 ? "Parabéns " + nameStudent + " você está aprovado! Sua média foi " + average + "." : nameStudent + ", infelizmente sua média foi " + average + ". Se esforce para sua prova de recuperação!";

alert(result);