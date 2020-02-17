function mudaTexto(){
    console.log('Entrei na funcao mudaTexto()');
    // alert('minha funcao mudaTexto()');
    //
    //
    // da árvore do DOM do HTML
    var elementoP = document.getElementById('info');
    console.log('Estrutura do Elemento P '.elementoP);
    elementoP.innerHTML = 'Novo texto Javascript JS.';
    console.log('estrutura do elemento P',elementoP);
    console.log('Sai da Função muda texto');
    document.getElementById('info').innerHTML = 'Trocado';
    console.log(infoP);
}