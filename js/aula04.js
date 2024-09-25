/* Arquivo js aula 04 Array*/

let produtos = ['Arroz', 'Feijão', 'Leite']
var codigos = Array(10, 20, 30)
let meses = ['Jan', 'Fev', 'Mar', 'Abril']


produtos.push('Pipoca', 'Óleo')
codigos.push(40, 50, 60)
meses.push('Mai', 'Jun', 'Jul')
meses[0] = 'Janeiro'

/*REMOVER DO FINAL pop = estourar */
produtos.pop()
codigos.pop()
meses.pop()

/*Adicionar no inicio unshift*/
produtos.unshift('açucar', 'corante')



// remover do inicio shift
produtos.shift()


//remover de uma posicao especifica
//posicao inicial, quantos remover
codigos.splice(2, 3)


//copiar array 
//posicao inicial, quantos quer copiar
let meses1 = meses.slice()
let meses2 = meses.slice(0, 4)

// ver tamanho do array
//meses.length

// spreed operator ... copiar e adicionar
let teste = [...produtos, 'ovo', 'pera']

//Array adicionar
var test = Array(10)
test[0] = "oi"
test[9] = "Tudo bem?"
test[10] = "Opa!"




console.log(test)
console.log(produtos)
console.log(codigos)
console.log(meses)
console.log(meses1)
console.log(meses2)
console.log(teste)
