/* Aulo 15 de js aplicação Calculadora de Media */
// Selecione os elementos que deseja manipular
let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('#form')

let btnCalcular = document.querySelector('#btnCalcular')
let btnLinpar = document.querySelector('#btnLinpar')

//Selecione caixas de texto por id
let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota1')
let cxMedia = document.querySelector('#media')
let cxSituacao = document.querySelector('#situacao')

//Calcular media
function calcularMedia(n1, n2) {
   return (n1 + n2) / 2
}

// Calcular a media apos o click 
btnCalcular.addEventListener(click, function(e) {
  // pegar o valor que esta dentro das caixas
  //usar metodo parseFloat no <p> para converter string p pra float
  let nota1 = parseFloat(cxNota1.value)
  let nota2 = parseFloat(cxNota2.value)
})
























/*Selecione os elementos que deseja manipular
let cxNota1 = document.querySelector("#nota1")
let cxNota2 = document.querySelector("#nota2")
let cxNota3 = document.querySelector("#nota3")
let cxNota4 = document.querySelector("#nota4")

let btnEnviar = document.querySelector("#btnEnviar")

let resul = document.querySelector('#resultado')

/*Adicionar um escutador para o btnEnviar
btnEnviar.addEventListener('click', function (e) {

e.preventDefault()

/*Pegar os valores de cad input
   let num1 = parseFloat(cxNota1.value)
   let num2 = parseFloat(cxNota2.value)
   let num3 = parseFloat(cxNota3.value)
   let num4 = parseFloat(cxNota4.value)

   /*Calcular o valor das notas
   const CALCULARM = ((num1 + num2 + num3 + num4) / 4).toFixed(1)

   /* Vereficar se os campos estão preenchidos
   if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
    /*emprimir os resultados 
      resul.textContent =`Por favor, preencha tosdas as notas corretamente.`
   
   } else {
     resul.textContent = `Sua média é: ${CALCULARM}`
   }

})*/