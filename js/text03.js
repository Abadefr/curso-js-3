


function calcularIMC () {
     let nome = document.querySelector("#nome").value
     let altura = document.querySelector("#altura").value
     let peso = document.querySelector("#peso").value

     if (nome && altura && peso) {
          let imc = peso / (altura * altura)
          document.querySelector(".resultado").textContent = `Olá ${nome}, seu IMC é: ${imc.toFixed(2)}`
     }else {
          document.querySelector(".resultado").textContent = `Olá ${nome}, tá de sacanagem? coloque um valor válido`
     }

}
let calcul = document.querySelector("#calcular")
calcul.addEventListener("click", calcularIMC)













/*function calcularIMC (){

     let nome = document.querySelector("#nome").value
     let peso = document.querySelector("#peso").value
     let altura = document.querySelector("#altura").value

     if (nome && peso && altura) {

          let imc = peso / (altura * altura)
           document.querySelector(".resultado").textContent = `${nome}, seu IMC é: ${imc.toFixed(2)}`
     } else {
          document.querySelector(".resultado").textContent = "Por favor, preencha todos os campos."
     }

    
}*/

let imcFinal = document.querySelector("#calcular").addEventListener("click", calcularIMC)
imcFinal.textContent = `Olá ${nome}, seu IMC é ${imcFinal}`
