
let listaNumerosSorteados = []
let numeroSecreto = gerarNumerosAleatorios()
tentativas = 1




function gerarNumerosAleatorios() {
    let numeroEscolhido = parseInt(Math.random()*4 +1)
    if (listaNumerosSorteados.length == 4) {
        listaNumerosSorteados = []
    }
    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumerosAleatorios()
    } else{
        listaNumerosSorteados.push(numeroEscolhido)
        console.log(listaNumerosSorteados)
        return numeroEscolhido 
    }
}
inserirTexto('h1','jogo venancio')
inserirTexto('p','escolha um número de 1 a 100')


function inserirTexto(tag,text) {
    let campo = document.querySelector(tag)
    campo.innerHTML = text
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2});

}

function limpaCampo()  {
    let campo = document.querySelector('input')
    campo.value = ''

}

function reiniciarJogo() {
    numeroSecreto = gerarNumerosAleatorios();
    limpaCampo();
    tentativas = 1;
    inserirTexto('h1','jogo venancio')
    inserirTexto('p','escolha um número de 1 a 100')
    document.getElementById('reiniciar').setAttribute('disabled', true)
}



function verificarChute() {
    
    let chute = document.querySelector('input').value
    if (chute == numeroSecreto) {
        inserirTexto('h1', 'acertou')
         
        let palavraTentativa = tentativas >1 ? 'tentativas':'tentativa'
        let mensagemTentativa = `você descrobriu o número com ${tentativas} ${palavraTentativa}`
        inserirTexto('p', mensagemTentativa)
        document.getElementById('reiniciar').removeAttribute('disabled')
        limpaCampo()

        
    } else{
        if (chute > numeroSecreto){
            inserirTexto('p', 'o número aleatório é menor que o chute')
        } else {
            inserirTexto('p','o número aleatório é maior que o chute')
        }
        tentativas ++
        limpaCampo()

    }
}




