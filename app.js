let listaSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibeTextoNaTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Portuguese Brazilian Female',{rate: 1.2});
}

function exibeMensagemInicial()
{
    exibeTextoNaTela('h1','Jogo do Número Secreto');
    exibeTextoNaTela('p','Escolha um número entre 1 e 10');
}

exibeMensagemInicial();

function verificarChute()
{
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto)
    {
        exibeTextoNaTela('h1', 'acertou!!! 🚀');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibeTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else 
    {
        if(chute > numeroSecreto)
        {
            exibeTextoNaTela('p', 'Número Secreto é menor que o chute');
        }
        else
        {
            exibeTextoNaTela('p','Número Secreto é maior que o chute');
        }
        tentativas++;
        limparCampo 
    }
    
}

function gerarNumeroAleatorio()
{
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite)
    {
        listaSorteados = [];
    }
    if (listaSorteados.includes(numeroEscolhido))
    {
        return gerarNumeroAleatorio();
    }
    else
    {
        listaSorteados.push(numeroEscolhido);
        console.log(listaSorteados);
        return numeroEscolhido;
    }
}

function limparCampo()
{
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo()
{
    numeroSecreto = gerarNumeroAleatorio;
    tentativas = 1;
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    exibeMensagemInicial();
}

