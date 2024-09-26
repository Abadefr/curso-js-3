/*//arquivo objeto

let pessoa = {
    nome : 'Edson',
   idade : 40,
    peso : 83,
  altura : 1.75,
  doador : false,
}

let produtos = {
    descricao : [],
        preco : []
}

const carros = {
    marca : ['Ford', 'Fiat', 'GM'],
   modelo : ['Ka', 'Uno', 'Corsa'], 
      ano : [1999, 2005, 2010]

}


/* Como acessar uma propriedade  usando 
pessoa.nome
pessoa.idade
pessoa.peso
pessoa.altura


//Da pra fazer operaçoes:
let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

//atualizar valor de propriedade
pessoa.nome = "Edson maia"
produtos.descricao = ['Arroz']
produtos.preco = [7.50]
produtos.descricao = [...produtos.descricao, 'feijao', 'trigo']
produtos.preco = [... produtos.preco, 9.99, 7.0]


carros.marca = [...carros.marca, 'wv']
carros.modelo = [...carros.modelo, 'fusca']
carros.marca = [...carros.marca, '1974']

*/

// criar variaveis you can use let or var
let produto = 'Arroz'
let quant = 2
let precoUnitario = 4.99
let precoTotal = quant * precoUnitario 
document.write(`Preço total R$ ${precoTotal}
  <br>
  `)
  console.log(new Intl.NumberFormat('pt-BR').format(precoTotal))

  document.write(`Preço Total ${precoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} <hr>`)