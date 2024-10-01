let sit1 = document.querySelector("#sit1")
let sit2 = document.querySelector("#sit2")
let sit3 = document.querySelector("#sit3")
let escolha = document.querySelector("#escolha")


let notaFinal1 = 3
let notaFinal2 = 6
let notaFinal3 = 7

/*Condicionais*/

/*
if (notaFinal1 >= 7) {
    //sit1.textContent = "Aprovado"
 }

if (notaFinal2 >= 7) {
    //sit1.textContent = "Aprovado"
} else {
    //sit2.textContent = "Reprovado"
}

if(notaFinal3 >= 7) {
    //sit1.textContent = "Aprovado"
} else if (notaFinal <= 3) {
    //sit2.textContent = "Reprovado"
} else {
    //sit2.textContent = "Recuperação"
}
*/ 

/*IF ternario 
notaFinal2 >= 7 ? sit1.textContent = "Passou" : sit1.textContent = "Ficou" */


/*IF encadeado ou aninhado
if(notaFinal3>= 7) {
    sit1.textContent = "Aprovado"
} else if (notaFinal3 <= 3) {
    sit1.textContent = "Reprovado"
} else {
    sit1.textContent = "Recuperação"
} */



//escolha caso
//let situacao = "Aprovado"
//let situacao = "Reprovado"
//let situacao = "recuperação"
let situacao = ""

switch(situacao) {
    case "Aprovado":
        escolha.textContent = "Passou de ano"
        break

    case "Reprovado": 
    escolha.textContent = "Não passou de ano"
        break

    case "Recuperação":
        escolha.textContent = "Ainda tem chance"
        break

    default:
        escolha.textContent = "Estude"
}
