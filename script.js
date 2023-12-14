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


let nameStudent = prompt("Qual o nome do(a) estudante?");
let firstGrade = prompt("Digite a primeira nota do bimestre do(a) estudante " + nameStudent);
let secondGrade = prompt("Digite a segunda nota do bimestre do(a) estudante " + nameStudent);
let thirdGrade = prompt("Digite a terceira nota do bimestre do(a) estudante " + nameStudent);
let average = (Number(firstGrade) + Number(secondGrade) + Number(thirdGrade)) / 3;

average = average.toFixed(2)

let result = average >= 6 ? "Parabéns " + nameStudent + " você está aprovado! Sua média foi " + average + "." : nameStudent + ", infelizmente sua média foi " + average + ". Se esforce para sua prova de recuperação!";

alert(result);
*/

/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.


let items = []

for(let item = 1; item <= 10; item++){
  items.push(prompt("Digite o item " + item + " da lista"))
}

alert(items);*/

/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas


let numberUser = prompt('Advinhe o número que estou pensando? Está entre 0 e 10');
numberUser = Number(numberUser);

const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

while(numberUser != randomNumber){
  numberUser = prompt("Erro, tente novamente:");
  xAttempts++;
}

alert("Parabéns! Você advinhou o número em " + xAttempts + " tentativas.");*/

/*

Faça um programa que tenha um menu e apresente a seguinte mensagem:

Olá usuário! Digite o número da opção desejada:

  1. Cadastrar um item na listas
  2. Mostrar itens cadastrados
  3. Sair do programa

_____

O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenários:

Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
Caso o usuário digite 2, ele poderá ver os itens cadastrados
  Se não houver nenhum item cadastrado, mostrar a mensagem:
    "Não existem itens cadastrados"
Caso o usuário digite 3, a aplicação deverá ser encerrada.

_____

Perguntas a serem feitas:

1. Quais os dados de entrada que terei? (inputs)
    O número da opção desejada

2. Quais as variáveis?
    Opção desejada
    Lista de itens

3. Qual o caminho ideal? (fluxo ideal)
    Coletar primeiro a opção desejada pelo usuário, após isso criar 
    cada um dos cenários possíveis e seguir pela opção desejada.

4. Qual(is) o(s) caminho(s) alternativo(s)? (fluxo alternativo)
5. Quais tratamentos de dados preciso fazer?
6. Qual é a saída, ou quais os dados de saída, esperada? (outputs)

let option;
let items = [];

while(option != 3) {

  option = Number(prompt(`
    Olá usuário! Digite o número da opção desejada:

    1. Cadastrar um item na listas
    2. Mostrar itens cadastrados
    3. Sair do programa
  `));

  switch(option){
    case 1:
      let newItem = prompt("Digite o nome do item").toUpperCase()
      items.push(newItem);
      break;
    case 2:
      if(items.length == 0){
        alert("Não existem itens cadastrados")
      } else {
        alert(items)
      }
      break;
    case 3:
      alert("tchau");
      break;
    default:
      alert("Opção Inválida!")
      break;
  }

}
*/
