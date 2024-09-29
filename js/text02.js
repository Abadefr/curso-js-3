let tela = document.querySelector("body")

let btnDark = document.querySelector("#btnDark")
  btnDark.addEventListener("click", modoDark)
function modoDark () {
    tela.classList.add("dark")
    tela.classList.remove("light")
}

let btnlight = document.querySelector("#btnLight")
  btnLight.addEventListener("click", modoLight)
function modoLight () {
    tela.classList.add("light")
    tela.classList.remove("dark")
}