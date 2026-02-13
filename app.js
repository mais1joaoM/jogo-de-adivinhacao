
/**
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

*/

let listaSorteados = [];
let numeroLimite = 10;
let tentativas = 1;
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    //console.log(chute == numeroSecreto)

    if ( chute == numeroSecreto ){
        exibirTextoNaTela('h1', 'Acertou!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tenatativa';
        let mensagemTentativas = `Voce descobriu o numero secreto(${numeroSecreto})! com ${tentativas} ${palavraTentativa}`

        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if ( chute > numeroSecreto){
            exibirTextoNaTela('p', `O numero secreto é menor que ${chute}`);
        }else{
            exibirTextoNaTela('p', `O numero secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaSorteados.length;

    if (quantidadeElementosLista == numeroLimite){
        listaSorteados = [];
    }

    if ( listaSorteados.includes(numeroEscolhido) ){
        return gerarNumeroAleatorio();
    }
    else{
        listaSorteados.push(numeroEscolhido)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}