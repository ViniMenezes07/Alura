function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let possiveisNumeros = [];
    let sorteados = [];
    /*let intervalo = ate - de +1;

    if(quantidade > intervalo){
        alert('O valor do campo "Quantidade" deve ser menor ou igual ao intervalo entre os valores dos campos "Do número" e "Até o número"');
        return;
    }

    if (de >= ate){
        alert('O valor do campo "Do número" deve ser menor que o valor do campo "Até o número"');
        return;
    } */
     
    for (let i = de; i<ate; i++){
        possiveisNumeros.push(i);
        /*numero = obterNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
            //alert('Tentando obter número inédito');
        }

        sorteados.push(numero);*/
    }

    if(quantidade == possiveisNumeros.length){
        sorteados = possiveisNumeros;
    }

    if (quantidade > possiveisNumeros.length){
        alert(`A quantidade é maior que o intervalo dos campos "Do número" e "Ate o Número" `);
    }

    if (quantidade < possiveisNumeros.length){
        
        for (let i = 0; i<quantidade; i++){
            let posicao = obterNumeroAleatorio(0, possiveisNumeros.length-1);
            sorteados.push(possiveisNumeros [posicao]);
            possiveisNumeros.splice(posicao, 1);
        }
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`

    alterarStatusBotao();
}