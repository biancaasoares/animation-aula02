'use script'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')

function mudarCor(){
    forma1.classList.toggle('vermelho')
}

function mudarForma(){
    forma2.classList.toggle('circulo')
}

function girar(){
    forma3.classList.toggle('giro')
}

function sumir(){
    forma4.classList.toggle('sumir')
}

function losango(){
    forma5.classList.toggle('losango')
}

function mudarLugar(){
    forma6.classList.toggle('mudarLugar')
}

function pulsar(){
    forma7.classList.toggle('pulsar')
}

function linha(){
    forma8.classList.toggle('linha')
}

forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', girar)
forma4.addEventListener('click', sumir)
forma5.addEventListener('click', losango)
forma6.addEventListener('click', mudarLugar)
forma7.addEventListener('click', pulsar)
forma8.addEventListener('click', linha)