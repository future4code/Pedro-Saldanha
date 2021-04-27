// interpretacao
// 1. 
// a. 10   50
// b. nada apareceria no console, pois não há o comando de imprimir no console.
// 2. 
// a. Darvas   Caio
// b. Amanda    Caio
// 3.
// a. a função pega os números pares de dentro de um array individualmente, 
// multiplicando ele pelo seu mesmo valor (4 * 4 por exemplo) e adicionando
// cada um desses resultados em um novo array. um nome melhor poderia ser 
// numerosParesAoQuadrado.

// escrita
// 4. a.
// function miniBioPeu () {
//     console.log("Eu sou o Peu, tenho 26 anos, moro no Rio e sou estudante da Labenu.")
// }

// miniBioPeu()
// b.
// function preencherBio (nome, idade, cidade, estudante) {
//     let miniBio;
//     if (estudante === true){
//         miniBio = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou estudante da Labenu.`
//     } else if (estudante === false) {
//         miniBio = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e não sou estudante da Labenu.`
//     }
//     console.log(miniBio)
//     return miniBio
// }

// preencherBio('Pedro', 26, 'Rio de Janeiro', true)
// preencherBio('José', 28, 'São Paulo', false)

// 5. a.
// function somarNumeros (num1, num2) {
//     const soma = num1 + num2
//     return soma
// }
// console.log(somarNumeros(5, 10))
// b.
// function compararNumeros (num1, num2) {
//     let comparacao;
//     if (num1 >= num2) {
//         comparacao = true
//     } else {
//         comparacao = false
//     }
//     return comparacao
// }
// console.log(compararNumeros(9, 10))
// c.
// function imprimirString (string10) {
//     contador = 0
//     while (contador < 10){
//         console.log(string10)
//         contador++
//     }
//     return string10
// }
// imprimirString("oi")

// 6. a.
const arrayGeral = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// function checarArray(array) {
//     return array.length
// } 

// console.log(checarArray(arrayGeral))
// b.
function checarNumeroPar(numero) {
    if (numero%2 === 0) {
        numero = true
    } else {
        numero = false
    }
    return numero
}
console.log(checarNumeroPar(2))

// c.
// let arrayPar = []
// function verificarNumerosParesArray(array) {
//     for (let numero of array) {
//         if (numero%2 === 0) {
//             arrayPar.push(numero);
//         }
//     }
//     return arrayPar.length
// }
// console.log(verificarNumerosParesArray(arrayGeral))

// d.
let arrayPar = []
function verificarNumerosParesArray(array) {
    for (let numero of array) {
        if (checarNumeroPar(numero)) {
            arrayPar.push(numero);
        }
    }
    return arrayPar.length
}
console.log(verificarNumerosParesArray(arrayGeral))