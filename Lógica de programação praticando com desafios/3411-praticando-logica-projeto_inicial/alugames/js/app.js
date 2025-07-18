let jogosAlugados = 0;

function contarEExibirJogosAlugados()   {
    console.log(`O total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    //linha de cima estou recupernado as funçoes no html via variavel.

    if (imagem.classList.contains('dashboard__item__img--rented')){
        // Adiciona uma confirmação antes de devolver o jogo
        if(confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }

    contarEExibirJogosAlugados();

}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function(){
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
})
