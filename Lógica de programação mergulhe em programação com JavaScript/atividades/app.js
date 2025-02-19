// ATIVIDADE Iniciando JAVAScript

//1 mostre um alerta de boas vindas
//alert ('Boas vindas ao nosso site!');

//2 Declare uma variável chamada nome e atribua a ela o valor "Lua".
//let nome = 'Lua';

//3 Crie uma variável chamada idade e atribua a ela o valor 25.
//let idade = 25;

//4 Defina uma variável numeroDeVendas e atribua a ela o valor 50.
//let numeroDeVnedas = 50;

//5 Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
// let saldoDisponivel = 1000;

//6 Exiba um alerta com o texto "Erro! Preencha todos os campos"
//alert('Erro! Preencha todos os campos');

/*7 Declare uma variável chamada mensagemDeErro e atribua a ela o valor 
"Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.*/
/*let mensagemDeErro = 'Erro! Preencha todos os Campos';
alert (mensagemDeErro);*/

//8 Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
//let nome = prompt ('Qual é o seu Nome:');

//9 Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
//let idade = prompt ('Qual a sua Idade:');

/*10 Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem 
"Pode tirar a habilitação!".*/
/*let idade = prompt ('Qual a sua Idade:');
if (idade >= 18){
    alert ('você ja pode tirar habilitação');
} */

//ATIVIDADE Condicionais e Concatenação

//1 qual o dia da Semana:
/*let diaDaSemana = prompt('qual é o dia da semana?')

if (diaDaSemana == 'domingo'){
    alert ('Bom fim de semana!');
} else if (diaDaSemana == 'sabado'){
        alert ('Bom fim de semana!');
    }  
    else{
        alert ('Boa Semana!');
};*/

//2 Verifique se o numero é positivo ou negativo:
/*let qualNumero = prompt('Digite um numero, positivo ou negativo e eu vou descobri!');

if (qualNumero > 0) {
    alert ('O número colocado é Poisitivo!');
} else {
    alert ('O número colocado é Negativo');
}*/

/*3 Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100,
mostre "Parabéns, você venceu!" no console do navegador. Caso contrário, mostre 
"Tente novamente para ganhar.".*/
/*let pontuacao = prompt('Coloque sua pontuação aqui: ');

if (pontuacao >= 100){
    console.log ('Parabéns, você venceu!');
}else {
    console.log ('Tente novamente para ganhar.');
};*/

/*4 Crie uma mensagem que informa o usuário sobre o saldo da conta, 
usando uma template string para incluir o valor do saldo.*/
/*let saldoconta = 500;
alert (`Seu saldo é de R$${saldoconta}.`);*/

/*5 Peça ao usuário para inserir seu nome usando prompt. 
Em seguida, mostre um alerta de boas-vindas usando esse nome.*/
/*let nome = prompt('Qual é o seu nome:');
alert ('Boas-vindas ' + nome);*/

//ATIVIDADE LOOPS e Tentativas

//1 Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
/*contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador ++;
}*/

//2 Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
/*contador = 10;
while(contador >= 0){
    console.log(+ contador);
    contador--;
}*/

/*3 Crie um programa de contagem regressiva. 
Peça um número e conte deste número até 0, usando um loop while no console do navegador.*/
/*contador = prompt('Digite um numero para comecar a contagem regressiva: 10')
while(contador >= 0){
    console.log(+ contador);
    contador--;
}*/

/*Crie um programa de contagem progressiva. Peça um número e conte 
de 0 até esse número, usando um loop while no console do navegador.*/
/*numeroMaximo = prompt('Digite um numero para comecar a contagem progressiva: ');
contador = 0
while(contador <= numeroMaximo){
    console.log(+ contador);
    contador++;
}*/

//ATIVIDADES Boas práticas de programação
/*
//1 Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas
console.log('Boas Vindas!');

//2 crie uma variavel nome e atribua a ela o seu nome e em seguida utilize o console.log
//para exibir a mensgem olá,[seu nome]!
let nome = 'Vinicius';
console.log('Olá, ' + nome);

//3 crie uma variavel chamada nome e atribua ela seu nome, em seguida utilize o alert para exibir a mensageme olá, [seu nome]!
alert ('Olá, ' + nome);

//4 utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta
//a uma variavel e mostre no console do navegador.
let linguagemPreferida = prompt ('Qual a linguagem de programação que você mais gosta?');
console.log(linguagemPreferida);

//5 Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
//Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
//Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 5;
let valor2 = 3;
let resultado = valor1 + valor2;
console.log (`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

//6 Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
//Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
//Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let resultado2 = valor1 - valor2;
console.log (`A subtração de ${valor1} e ${valor2} é igual a ${resultado2}`);

//7 Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, 
//utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
 
let idade = prompt('Digite sua idade: ');
if (idade >= 18) {
    console.log ('é Maior de idade!');
} else{
    console.log ('é Menor de idade!');
}

//8 Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero.
//Use if-else para imprimir a respectiva mensagem.

let numero = parseFloat(prompt('Coloque um numero positivo ou negativo'));
if (numero === 0) {
    alert ('seu numero e Zero');
} else {
    if (numero > 0){
        alert ('seu numero e Positivo');
    } else {
        alert ('seu numero e Negativo');
        }
}

//9 Use um loop while para imprimir os números de 1 a 10 no console

let contador = 1;
while(contador <= 10){
    console.log (contador);
    contador++;
}

//10 Crie uma variável "nota" e atribua um valor numérico a ela.
//Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = 7;
if(nota >=7){
    console.log('Voce foi Aprovado!');
}else {
    console.log('Voce foi Reprovado!');
}

//11 Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

let numAleatorio = Math.random();
console.log(numAleatorio);

//12 Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let numAleatorio2 = parseInt(Math.random() * 10)+1;
console.log(numAleatorio2);

//13 Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

let numAleatorio3 = parseInt(Math.random() * 1000)+ 1;
console.log(numAleatorio3);

*/