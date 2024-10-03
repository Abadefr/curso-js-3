/*Selecione todos os elementos que deseja manipular*/   
let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxPeso = document.querySelector('#peso')
let cxAltura = document.querySelector('#altura')
let cxImc = document.querySelector('#resultadoImc')

let aviso = document.querySelector('#aviso')
let dados = document.querySelector('.pessoa')

let btnEnviar = document.querySelector('#btnEnviar')

/*Adicionar escutador para btnEnviar*/
btnEnviar.addEventListener('click', function (e) {
    /*Evitar que formulário seja enviado/recarregado*/
    e.preventDefault();
    /*pegar os valores de cada imput*/
     let nome = cxNome.value
     let idade = parseFloat(cxIdade.value)
     let peso = parseFloat(cxPeso.value)
     let altura = parseFloat(cxAltura.value)

     /*Calcular o imc*/
     let imc = (peso / (altura * altura)).toFixed(1)
    

     // Exibir os valores no console
     console.log(nome)
     console.log(idade)
     console.log(peso)
     console.log(altura)
 
    //Atualizar o valor
    cxImc.value = imc

   // Definir a situação baseada no IMC
     let sit = situacaoDoPeso(imc)
     aviso.textContent = sit

   // Criar objeto pessoa
   let pessoa = {
    nome : nome,
   idade : idade,
    peso : peso,
  altura : altura,
     imc : imc,
     sit : sit
   }

   // Exibir o objeto pessoa no console
   console.log(pessoa)

   
    // Atualizar os campos visuais com os dados da pessoa

    dados[1].textContent = pessoa.nome
    dados[2].textContent = pessoa.idade + ' anos'
    dados[3].textContent = pessoa.peso + ' kg'
    dados[4].textContent = pessoa.altura + 'm'
    dados[5].textContent = pessoa.imc + ' ' + pessoa.sit
})

function situacaoDoPeso(imc) {
  let situacao = ''
  if (imc < 18.5) {
      situacao = 'Baixo peso'
  } else if (imc >= 18.5 && imc <= 24.9 ) {
      situacao = 'peso normal'
  } else if (imc >= 25 && imc <= 29.9) {
      situacao = 'sobrepeso'
  } else if (imc >= 30 && imc <= 34.9) {
      situacao = 'Obsidade I'
  } else if (imc >= 35 && imc <= 39.9) {
      situacao = 'Obsidade II'
  } else if (imc >= 40) {
      situacao = 'Obsidade III'
  } else {
      situacao = 'Informe seu peso corretamente'
  }
  return situacao
}