/*Selecione os elementos que deseja manipular*/
let cxNota1 = document.querySelector("#nota1")
let cxNota2 = document.querySelector("#nota2")
let cxNota3 = document.querySelector("#nota3")
let cxNota4 = document.querySelector("#nota4")

let btnEnviar = document.querySelector("#btnEnviar")

let resul = document.querySelector('#resultado')

/*Adicionar um escutador para o btnEnviar*/
btnEnviar.addEventListener('click', function (e) {

e.preventDefault()

/*Pegar os valores de cad input*/
   let num1 = parseFloat(cxNota1.value)
   let num2 = parseFloat(cxNota2.value)
   let num3 = parseFloat(cxNota3.value)
   let num4 = parseFloat(cxNota4.value)

   /*Calcular o valor das notas*/
   const CALCULARM = ((num1 + num2 + num3 + num4) / 4).toFixed(1)

   /* Vereficar se os campos estão preenchidos*/
   if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
    /*emprimir os resultados */
      resul.textContent =`Por favor, preencha tosdas as notas corretamente.`
   
   } else {
     resul.textContent = `Sua média é: ${CALCULARM}`
   }

})