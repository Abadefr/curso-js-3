let carros = ["Fusca", "Brasilia", "Gurgel"]
/* For para faça*/
/* i = interador, interação ou index */
for (let i = 0; i < 5; i++) {
    document.write(i + " ")
}

for (let i = 5; i >= 1; i--) {
    document.write(i + " ")
}
let amor = "eu te amo"
for (let i = 0; i < 100; i++) {
    document.write(`${amor} ${i},  `)
}

for (let i = 0; i < carros.length; i++) {
    document.write(`<li>${carros[i]}</li>`)
}

let frutas = ["Pera", "Uva", "Maçã", "Banana", "Melancia"]

frutas.forEach(function(fruta, i) {
    document.write(`${i} ${fruta} <br>`)
})

carros.forEach(function(carro) {
    document.write(`${carro} <br>`)
})

let contador = 0
while(contador < frutas.length) {
    console.log(frutas[contador])
    contador++
}

let iterador = 0

do {
    console.log(carros[iterador])
    iterador++
}while(iterador < carros)
