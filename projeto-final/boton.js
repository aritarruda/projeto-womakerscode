function addElemento(){
    let divNova = document.createElement('div')
    let conteudoNovo = document.createTextNode('Obrigada pela visita')

    divNova.appendChild(conteudoNovo)

    let divAtual = document.getElementById('div1')
    document.body.insertBefore(divNova, divAtual)
}

let b = document.getElementById('bt')

bt.addEventListener('click',addElemento)
