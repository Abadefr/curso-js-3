/* Aulo 15 de js aplicação Calculadora de Media */
// Selecione os elementos que deseja manipular

let formulario = document.querySelector('#form')

//Selecione caixas de texto por id
let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')

let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')

let cxMedia = document.querySelector('#media')
let cxSituacao = document.querySelector('#situacao')

let aviso = document.querySelector('#aviso')


//Calcular media
function calcularMedia(n1, n2) {
   return (n1 + n2) / 2
}

// Calcular a media apos o click 
btnCalcular.addEventListener('click', function(e) {
  e.preventDefault()
  // pegar os valores que estão dentro das caixas
  //usar metodo parseFloat no <p> para converter string p pra float
  let nota1 = parseFloat(cxNota1.value)
  let nota2 = parseFloat(cxNota2.value)
  let media = calcularMedia(nota1, nota2)

  if(isNaN(media) || media < 0) {
    cxSituacao.value = ''
  } else {
    cxMedia.value = parseFloat(media)
    //cxSituacao.value = situacaoFinal(media)//criar situacaoFinal
    //formatarSituacao(situacaoFinal(media))//criar formatarsituacao para formatar (situacaoFinal)
  }
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


/*// CALCULAR MEDIA
function calcularMedia(n1, n2) {
  return (n1 + n2) / 2
}

// DEFINIR SITUACAO FINAL COM BASE NA MEDIA
function situacaoFinal(mediaFinal) {
  let situacaoFinal = ''
  
  if (mediaFinal >= 7) {
      situacaoFinal = 'Aprovado(a)'
  } else if (mediaFinal <= 3) {
      situacaoFinal = 'Reprovado(a)'
  } else {
      situacaoFinal = 'Recuperação'
  }
  return situacaoFinal
}

// FORMATAR A CAIXA DE SITUACAO FINAL
function formatarSituacao(situacaoFinal) {
  console.log('Situação Final ' + situacaoFinal)
  switch(situacaoFinal) {

      case 'Aprovado(a)':
          cxSituacao.classList.remove('reprovado')
          cxSituacao.classList.remove('recuperacao')
          cxSituacao.classList.add('aprovado')
          console.log('adicionar class aprovado')
          break
      
      case 'Reprovado(a)':
          cxSituacao.classList.remove('aprovado')
          cxSituacao.classList.remove('recuperacao')
          cxSituacao.classList.add('reprovado')
          console.log('adicionar class reprovado')
          break
      
      case 'Recuperação':
          cxSituacao.classList.remove('aprovado')
          cxSituacao.classList.remove('reprovado')
          cxSituacao.classList.add('recuperacao')
          console.log('adicionar class recuperacao')
              break

      default:
          console.log('Situação Indefinida')
  } // fim do switch case

}

// VALIDAR E GERAR FLASH MESSAGE
function validarNumero(numero) {
  let num1 = cxNota1.value
  let num2 = cxNota2.value
  if(num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10) {
      formulario.reset() // limpar form
      aviso.textContent = 'Digite uma nota entre 0.0 e 10.0'
      aviso.classList.add('alerta')
      setTimeout(function(){
          aviso.textContent = ''
          aviso.classList.remove('alerta')
      }, 2000);
  }
}

// CALCULAR A MEDIA APOS O CLICK NO BOTAO
btnCalcular.addEventListener('click', function(e) {
  console.log('Calcular Média')
// pegar o valor que esta dentro das caixas
// usar metodo parseFloat p converter string p float
  let nota1 = parseFloat(cxNota1.value)
  let nota2 = parseFloat(cxNota2.value)
  let media = calcularMedia(nota1, nota2)
  
  console.log(nota1)
  console.log(nota2)
  console.log(media)

  if(isNaN(media) || media < 0) {
      console.log("Não é um número")
      cxSituacao.value = ''
  } else {
      cxMedia.value = parseFloat(media)
      cxSituacao.value = situacaoFinal(media)
      formatarSituacao(situacaoFinal(media))
  }
  e.preventDefault()
})

// APOS LIMPAR TIRAR AS CLASS DA CX SITUACAO
btnLimpar.addEventListener('click', function() {
  cxSituacao.classList.remove('aprovado')
  cxSituacao.classList.remove('reprovado')
  cxSituacao.classList.remove('recuperacao')
})*/