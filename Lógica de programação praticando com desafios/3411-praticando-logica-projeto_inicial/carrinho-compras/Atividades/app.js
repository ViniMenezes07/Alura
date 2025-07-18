//4º passo atualizar valor total, 
//variavel colocada fora da function pq se tivesse dentro toda vez que o usuario aperta o botao ele zeraria o valor
let totalGeral = 0;

//função para limpar tudo, quando abre o site
limpar();

//função do botão adicionar
function adicionar(){
    //1ª passo recuperar valores: nome dos produtos, quantidade e valor, o valor e nome do produto estão juntos entao devemos separar eles
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];//split utilizado para separar Strings em array

    //Verificar se o produto selecionado é Válido
    if(!produto || produto.trim() ===" "){
        alert("Selecione um produito válido.");
    }

    //Verifica se a quantidade inserida é válida
    if(isNaN(quantidade) || quantidade <= 0){
        alert("Insira uma quantidade válida.");
    }
    
    let valorUnitario = produto.split('R$')[1];//dentro do () colocamos um valor que sera o parametro para andarmos a casa do array, sendo 0 antes e 1 ou mais depois
    let quantidade = document.getElementById('quantidade').value;
    
    //2º passo calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario
    
    //3º passo adcionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span>${nomeProduto}<span class="texto-azul">${preco}</span>
        </section>`;

//4º passo atualizar valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;

    //aqui reinicia o campo de quantidade após adicionar o produto, nesse caso fica dentro da function para limpar toda vez que eu adiciono um item.
    document.getElementById('quantidade').value = 0; 
}

//função do botão limpar
function limpar(){
    totalGeral = 0;
    //reiniciando o lista via js
    document.getElementById('lista-produtos').innerHTML = '';
    //reiniciando o total via js
    document.getElementById('valor-total').innerHTML = 'R$ 0';

}

