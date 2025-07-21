function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (qtd > qtdPista) {
        alert ('Quantidade Indisponivel para tipo Pista.');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert ('Compra realizada com sucesso');

    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (qtd > qtdSuperior) {
        alert ('Quantidade Indisponivel para tipo Superior.');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert ('Compra realizada com sucesso');

    }
}

function comprarInferior(qtd) {
    let qtdinferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtd > qtdinferior) {
        alert ('Quantidade Indisponivel para tipo Inferior.');
    } else {
        qtdinferior = qtdinferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdinferior;
        alert ('Compra realizada com sucesso');

    }
}

