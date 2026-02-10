/**
 * Criar uma função que exibe "Olá, mundo!" no console.
 */

function exibirOlaMundoNoConsole(){
    console.log('Hello, World!');
}
exibirOlaMundoNoConsole();

/**
 * Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
 */

function saudacao(nome){
    console.log(`Olá, ${nome}!`);
}
saudacao('Joao');

/**
 * Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
 */

function retornaDobro(numero){
    return parseInt(numero*2)
}
console.log(retornaDobro(5));

/**
 * Criar uma função que recebe três números como parâmetros e retorna a média deles.
 */

function retornaMedia(num1, num2, num3){
    return parseInt((num1+num2+num3) / 3)
}
console.log(retornaMedia(3, 4, 5));

/**
 * Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
 */

function retornaMaior(num1, num2){
    return num1 > num2 ? `O numero ${num1} é maior` : `O numero ${num2} é maior`;
}
console.log(retornaMaior(5, 3));

/**
 * Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
 */

function retornaMultiplicacao(num){
    return parseInt(num * num);
}
console.log(retornaMultiplicacao(40));