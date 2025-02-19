/*
//ATIVIDADES Interagindo com HTML

//1 Faca dowloads

//2 Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio.';

//3 Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function botaoConsole() {
    console.log('O botão console foi clicado');
}

//4 Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function botaoAlert() {
    alert('Eu amo JS');
}

//5 Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil.
//Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function botaoPrompt() {
   let nomeDaCidade = prompt('Digite o nome de uma cidade aqui:');
   alert(`Estive em ${nomeDaCidade} e lembrei de você.`);
}

//6 Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function botaoSoma() {
    let num1 = parseInt(prompt('Digite um Numero:'));
    let num2 = parseInt(prompt('Digite mais um numero:'));
    let resultado = num1 + num2;

    alert(`A soma de ${num1} e ${num2} e igual a: ${resultado}`);
}



//ATIVIDADES Funções

//1 Criar uma função que exibe "Olá, mundo!" no console.
function exibirNoConsole() {
    console.log('Olá Mundo!');
}
exibirNoConsole(); //tem que usar para chamar a função

//2 Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome) {
    console.log(`Olá, ${nome}!`);
}
let nome = prompt('Qual o seu Nome?');
exibirNome(nome);

//3 Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function recebeNumero(numero){
    return numero * 2;
}
let numero = parseInt(prompt('Digite um Numero:'));
let dobro = recebeNumero(numero);
console.log(`O dobro do ${numero} e ${dobro}`);

//4 Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaDeNumeros(umNumero, doisNumero, tresNumero){
    return (umNumero + doisNumero + tresNumero)/ 3;
}
let umNumero = parseInt(prompt('Digite o primeiro Numero:'));
let doisNumero = parseInt(prompt('Digite o segundo numero:'));
let tresNumero = parseInt(prompt('Digite o terceiro numero:'));
let media = mediaDeNumeros(umNumero, doisNumero, tresNumero);

console.log(`A media dos numeros ${umNumero}, ${doisNumero}, ${tresNumero} é ${media}`);

//5 Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(umNum, doisNum){
    return umNum > doisNum ? umNum : doisNum;
}
let umNum = parseInt(prompt('Digite o primeiro Numero: '));
let doisNum = parseInt(prompt('Digite o segundo Numero: '));

let qualNumeroMaior = maiorNumero(umNum, doisNum);
console.log(`O numero maior entre ${umNum} e ${doisNum} é: ${qualNumeroMaior}`);

//6 Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicacao(num){
    return num*num;
}
let num = parseInt(prompt('Digite um número:'));
let multiDoNum = multiplicacao(num);

console.log(`A multiplicação do ${num} por ele mesmo é: ${multiDoNum}`);

//ATIVIDADES Reiniciando o Jogo

//1 Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, 
//em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function botaoSoma() {
    let peso = parseFloat(prompt('Coloque seu peso em kg: ').replace(",", "."));
    let altura = parseFloat(prompt('Coloque sua altura em metros: ').replace(",", "."));
    let resultado = peso / (altura * altura);
    
    alert (`O seu IMC é: ${resultado}`);
}

//2 Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function botaoSoma() {
    let numero = parseInt(prompt('Digite um número para calcular o fatorial:'));

    if (numero >= 0) {
        
        let resultado = fatorial(numero);
        alert(`O fatorial de ${numero} é: ${resultado}`);
    } else {
        alert('Por favor, digite um número não negativo.');
    }
}

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}

//3 Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor
//equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function botaoConsole(){
    let dolares = parseFloat(prompt(`Digite o valor desejado em dólares: $ `).replace(",", "."));
    let cotacaoDolar = 4.80;
    resultado = dolares * cotacaoDolar;
    console.log (`O valor $${dolares} convertido é: R$${resultado.toFixed(2)}`);
}

//4 Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, 
//utilizando altura e largura que serão dadas como parâmetro.
function botaoAlert(){
    let altura = parseInt(prompt('Digite a Altura da sala: '));
    let largura = parseInt(prompt('Digite a Largura da sala: '));
    resultado = largura * altura;
    alert (` A Área da sala é: ${resultado} `);
}

//5 Crie uma função que mostre na tela a área e o perímetro de uma sala circular, 
//utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function botaoAlert(raioDaSala) {
    raioDaSala = 4;
    let pi = 3.14;
    let area = pi * (raioDaSala ** 2);
    let perimetro = 2 * pi * raioDaSala;

    alert(`O valor da Área é ${area} e o valor do Perímetro é ${perimetro}`);
}

//6 Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function botaoSoma(){
    let tabuada = parseInt(prompt('Digite um valor para que eu faça a tabuada: '));
    mostrarTabuada(tabuada);
}
function mostrarTabuada(tabuada, i = 1){
    if (i <= 10) {
        let resultado = tabuada * i;
        console.log(`${tabuada} x ${i} = ${resultado}`);
        mostrarTabuada(tabuada, i+1);
    }
}

//ATIVIDADE Listas

//1 Crie uma lista vazia, com o nome listaGenerica.

let listaGenerica = [1,2,3];

//2 Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com 
//os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

let linguagensDeProgramacao = ['JavaScript','C','C++','Kotlin','Python'];

//3 Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
let adicionar = linguagensDeProgramacao.push ('Java', 'Ruby', 'GoLang');

//4 Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

let listaNomes = ['vinicius', 'jeferson','patricia'];
let exibirConsole = console.log(`Mostrando primeiro elemento da lista: ${listaNomes[0]}`);

//5 Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

exibirConsole = console.log(`Mostrando segundo elemento da lista: ${listaNomes[1]}`);

//6 Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

exibirConsole = console.log(`Mostrando terceiro elemento da lista: ${listaNomes[2]}`);
//*/