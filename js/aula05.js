//arquivo objeto

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
*/

//Da pra fazer operaçoes:
let imc = pessoa.peso / (pessoa.altura * pessoa.altura)