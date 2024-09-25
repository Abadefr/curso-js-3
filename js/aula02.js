/* Criar variaveis e atribuir valores*/

let mensagem = "Minha mensagem"
let mensagem2 = "Outra mensagem"
let meuPeso = 83.5
let minhaAltura = 1.75
let minhaIdade = 40
let ehDoador = false
let teste = null

/*criar constantes e atribuir valor*/
const PI = 3.3141
const TAXA = 0.5

teste = "Algum conteudo"

/* Escrever o conteudo de variaveis e constantes */
document.write(mensagem)
document.write(mensagem2)
document.write(meuPeso)
document.write(minhaAltura)
document.write(minhaIdade)
document.write(ehDoador)
document.write(teste)
document.write(PI)
document.write(TAXA)

/* Escrever o conteudo de variaveis e constantes */
document.write(" <p> mensagem: " + mensagem + "</p>")
document.write(`mensagem2: ${mensagem2}`)
document.write("<p>meuPeso: " + meuPeso + "Kg </p>")
document.write(`minhaAltura: ${minhaAltura}`)
document.write("<p>minhaIdade: " + minhaIdade + "</p>")
document.write(`ehDoador: ${ehDoador}`)
document.write("<p>teste: " + teste + "</p>")
document.write(`PI: ${PI}`)
document.write("<p>taxa: " + TAXA + "</p>")


/*Operadores*/
let n1 = 10
let n2 = 2
let n3 = "2"
document.write(`N1 ${n1} <br>`)
document.write(`N1 ${n2} <br>`)
document.write(`N1 ${n3} <br>`)

console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(n1 % n2)

console.log(n2 == n3)
console.log(n2 === n3)
console.log(n2 != n3)
console.log(n2 !== n3)
