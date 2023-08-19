function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio)

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play()
    } else {
        console.log('Elemento não encontrado ou seletor inválido.')
    }
}

const listaTeclas = document.querySelectorAll('.tecla')

for (let contador = 0; contador < listaTeclas.length; contador++) {
    
    const teclas = listaTeclas[contador]
    const instrumento = teclas.classList[1]
    const idAudio = `#som_${instrumento}`

    teclas.onclick = function () {
        tocaSom(idAudio)
    }

    teclas.onkeydown = function (evento) {
        if (evento.code === 'Enter' || evento.code === 'Space')

        teclas.classList.add('ativa')
    }

    teclas.onkeyup = function () {
        teclas.classList.remove('ativa')
    }
}

