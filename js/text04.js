let calcul = document.querySelector("#calcular")
calcul.addEventListener("click", function () {

    let nome = document.querySelector("#nome").value
    let nota1 = parseFloat(document.querySelector("#nota1").value)
    let nota2 = parseFloat(document.querySelector("#nota2").value)
    let nota3 = parseFloat(document.querySelector("#nota3").value)
    let nota4 = parseFloat(document.querySelector("#nota4").value)

    let notaFinal = (nota1 + nota2 + nota3 + nota3 )/ 4

    if(  !isNaN(nota1) &&  !isNaN(nota2) &&  !isNaN(nota3) &&  !isNaN(nota4)) {
        let status = notaFinal >= 6 ? "Aprovado" : "Reprovado"
        document.querySelector(".resultado").textContent = `Olá, ${nome}, sua nota final é: ${notaFinal.toFixed(2)}. Você está ${status}`
    } else {
        document.querySelector(".resultado").textContent = `Por favor, insira todas as notas corretamente `
    }
})








/*let calcul = document.querySelector("#calcular")
calcul.addEventListener("click", function () {
    
    let nome = document.querySelector("#nome").value
    let nota1 = parseFloat(document.querySelector("#nota1").value)
    let nota2 = parseFloat(document.querySelector("#nota2").value)
    let nota3 = parseFloat(document.querySelector("#nota3").value)
    let nota4 = parseFloat(document.querySelector("#nota4").value)

    let notaFinal = (nota1 + nota2 + nota3 + nota4) / 4

    if ( !isNaN(nota1) &&  !isNaN(nota2) &&  !isNaN(nota3) &&  !isNaN(nota4)) {
        let status = notaFinal >= 6 ? "Aprovado" : "Reprovado"
        document.querySelector(".resultado").textContent = `Olá, ${nome} sua nota final é: ${notaFinal.toFixed(2)}. Você está ${status}`
    } else {
        document.querySelector(".resultado").textContent = `Por favor, insira todas as notas corretamente!`
    }
})*/