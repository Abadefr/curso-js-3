let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 manipular css'
//titulo.innerHTML = 'Aula 09 manipular css'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', '/img/5eb478e422ce7.webp')
imagem.setAttribute('width', '250px')

/*Manipular css*/
//document.querySelector('h1').style.color = 'red'
titulo.style.color = 'red'
titulo.style.backgroundColor = 'black'
titulo.style.borderBottom = '2px solid red'
titulo.style.borderRadius = "100px"

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'azul')
//box[0].removeAttribute('class')

let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')
btnDark.addEventListener('click', modoDark)

let btnLight = document.querySelector('#btlight')
btnLight.addEventListener('click', modoLight)

function modoDark () {
    console.log('modo dark')
    tela.classList.add("dark")
    tela.classList.remove("light")
}

function modoLight () {
    console.log('modo light')
    tela.classList.add("light")
    tela.classList.remove("dark")
}