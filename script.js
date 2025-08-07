const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavraschave);

function mostraPalavraschave (){
    const texto = document.querySelector('#emtrada-de-texto').value;
    const camporesultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = processatexto(texto);
    
    camporesultado.textoContent = palavrasChave.join(", ");
}

function processaTexto(texto){
    let palavras = texto.split(/[a-zA-Z]+/);
    return palavras;
}