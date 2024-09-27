// .querySelector('')
// selecionar elemento com base na tag, #id ou .class
let titulo = document.querySelector('h1')
// .textContent
//serve para acessae ou alterar conteudo de um elemento que foi selecionado
titulo.textContent = 'Dom'

let testosmodi = document.querySelectorAll('.textos')

testosmodi[0].textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique nisl a dignissim venenatis. Nam pellentesque interdum purus at posuere. Integer sit amet enim risus. In fermentum laoreet rutrum.'
testosmodi[1].textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique nisl a dignissim venenatis. Nam pellentesque interdum purus at posuere. Integer sit amet enim risus. In fermentum laoreet rutrum.'
testosmodi[2].textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique nisl a dignissim venenatis. Nam pellentesque interdum purus at posuere. Integer sit amet enim risus. In fermentum laoreet rutrum.'

//Existem tbm os metodos
//.getElementsByTagName()
//.getElementsById()
//.getElementsByClassName()
//mas, prefira usar o querySelector, serve pra todos

