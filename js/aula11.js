function carregou() {
    console.log("página carregada com sucesso!")
}

function focou() {
    console.log("Focou no titúlo!")
}

function focoNoCampo() {
    console.log("Focou no campo!")
}

function semFocoNoCampo() {
    console.log("Saiu do foco do campo!")
}

let letras = document.querySelector("input[type=text]")
function avisarQueTeclou() {
    let numLetras = 1 
    console.log(`Esta teclando: ${letras.value.length + numLetras}`)
    console.log("teclou no campo!")
}

let btn1 = document.querySelector("#btn1")
btn1.addEventListener("mouseover", function () {
    console.log("Focou no botão!")
})

let btnsub = document.querySelector("#btn3")
btnsub.addEventListener("click", function (event) {
    event.preventDefault()
    console.log("Clicou no botão Enviar")
})
