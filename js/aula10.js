let titulo = document.querySelector("h1")
titulo.textContent = "Funções no JS"
let boxes = document.querySelectorAll("box")

/* Funções sem parametros e sem retorno
(procedure) */

function olaMundo() {
    document.write("Olá Mundo sem retorno<br>")
}

/*Funções sem parametros e com retorno
(function) */

function olaMundo2() {
    return "Olá Mundo com retorno<br>"
}

/*Chamar a função*/
olaMundo()
document.write(olaMundo2())


let x = 2
let y = 1
let mensagem = "Jesus Cristo é o Salvador"

/* Funções com parametros e sem retorno
(procedure)*/
function somar(a, b) {
    document.write(a + b + "<br>")
}

/* Funções com parametros e com retorno
(function)*/

function somar2(a, b){
    return a + b
}

/*Chamar a função*/
somar(x, y)
somar(100, 900)

document.write(`<p>${somar2(x, y)}</P>`)
document.write(`<p>${somar2(100, 4)}</P>`)

/*Função anonima = não tem nome pode ou não ter parametros pode ou não ter retorno*/

titulo.addEventListener("click", function() {
    console.log("Eu sei que você deu click")
})

const olaMundoArrow = () => document.write("Olá mundo!")


const olaMundoArrow2 = () => "<p>Olá mundo com arrow function</P>"

olaMundoArrow()
document.write(olaMundoArrow2())