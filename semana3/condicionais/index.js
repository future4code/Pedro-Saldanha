// interpretação
// 1. O código está checando se o número inserido pelo usuário é par ou ímpar, para isso ele verifica o resto da divisão do input do usuário por 2. Caso o resultado seja zero, significa que o número é par, sendo assim a mensagem "Passou no teste." é impressa no console. Nos outros casos a mensagem que aparece é "Não passou no teste.".
// 2. 
// a. o código acima serve para automatizar a precificação de acordo com o tipo de fruta. Dependendo de qual fruta o usuário inserir no prompt, a msg vai dizer um preço diferente.
// b. O preço da fruta Maçã é R$2.25
// c. 5
// 3.
// a. Pedindo para o usuário inserir um número e transformando esse string em number.
// b. Esse número passou no teste. Nenhuma mensagem.
// c. Sim, pois o console.log(mensagem) está tentando acessar uma variável que foi definida dentro de um escopo filho, o que significa que, para qualquer propósito fora desse escopo, ela nunca foi declarada.

// escrita
// 4.
// let idadeUsuario = Number(prompt("Qual a sua idade?"))
// if (idadeUsuario >= 18) {
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir")
// }

// 5.
// let turnoAluno = prompt("Qual o seu turno?")
// if (turnoAluno === "M"){
//     console.log('Bom Dia!')
// } else if (turnoAluno === "V") {
//     console.log('Boa Tarde!')
// } else if (turnoAluno === "N") {
//     console.log('Boa Noite!')
// } else {
//     console.log('Boa Aula!')
// }
// 6.
// let turnoAluno = prompt("Qual o seu turno?")
// switch (turnoAluno){
//     case 'M'.toLowerCase():
//         console.log('Bom Dia!')
//         break
//     case "V".toLowerCase():
//         console.log('Boa Tarde!')
//         break
//     case "N".toLowerCase():
//         console.log('Boa Noite!')
//         break
//     default:
//         console.log('Boa Aula!')
// }

// 7.
// let generoFilme = prompt('Qual o gênero do filme?')
// let precoFilme = prompt('Qual o valor do ingresso?')
// if ((generoFilme === 'Fantasia') && (precoFilme < 15)) {
//     console.log('Bom filme!')
// } else {
//     console.log('Escolha outro filme :(')
// }

// desafio
// 1.
// let generoFilme = prompt('Qual o gênero do filme?')
// let precoFilme = prompt('Qual o valor do ingresso?')
// if ((generoFilme === 'Fantasia') && (precoFilme < 15)) {
//     let snack = prompt('Qual snack você vai querer?')
//     console.log('Bom filme!')
//     console.log("com", snack)
// } else {
//     console.log('Escolha outro filme :(')
// }

// 2. 
let nomeUsuario = prompt('Qual o seu nome?')
let tipoJogo = prompt('Jogo nacional ou internacional?')
let etapaJogo = prompt('Qual etapa da competição?')
let categoria = Number(prompt('Qual a categoria?'))
let quantidade = Number(prompt('Quantos ingressos?'))
let valorIngresso;

console.log('---Dados da compra---')
console.log('Nome do cliente: ', nomeUsuario)

if (tipoJogo === "IN") {
    console.log('Tipo do jogo: Internacional')
} else if (tipoJogo === "DO") {
    console.log('Tipo do jogo: Nacional')
}

if (etapaJogo === "SF") {
    console.log('Etapa do jogo: Semi-final')
} else if (etapaJogo === "DT") {
    console.log('Etapa do jogo: Terceiro lugar')
} else if (etapaJogo === "FI") {
    console.log('Etapa do jogo: Final')
}

switch (categoria) {
    case 1:
        console.log('Categoria: 1')
        break
    case 2:
        console.log('Categoria: 2')
        break
    case 3:
        console.log('Categoria: 3')
        break
    case 4:
        console.log('Categoria: 4')
        break
}

console.log('---Valores---')

if (tipoJogo === 'IN') {
    if (etapaJogo === 'SF') {
        switch (categoria) {
            case 1:
                valorIngresso = 1320 / 4.1
                break
            case 2:
                valorIngresso = 880 / 4.1
                break
            case 3:
                valorIngresso = 550 / 4.1
                break
            case 4:
                valorIngresso = 220 / 4.1
                break
        }
    } else if (etapaJogo === 'DT') {
        switch (categoria) {
            case 1:
                valorIngresso = 660 / 4.1
                break
            case 2:
                valorIngresso = 440 / 4.1
                break
            case 3:
                valorIngresso = 330 / 4.1
                break
            case 4:
                valorIngresso = 170 / 4.1
                break
        }
    } else if (etapaJogo === 'FI') {
        switch (categoria) {
            case 1:
                valorIngresso = 1980 / 4.1
                break
            case 2:
                valorIngresso = 1320 / 4.1
                break
            case 3:
                valorIngresso = 880 / 4.1
                break
            case 4:
                valorIngresso = 330 / 4.1
                break
        }
    }
    console.log('Valor do ingresso: U$ ', valorIngresso)
    console.log('Valor total: U$ ', valorIngresso*quantidade)
} else if (tipoJogo === 'DO') {
    if (etapaJogo === 'SF') {
        switch (categoria) {
            case 1:
                valorIngresso = 1320
                break
            case 2:
                valorIngresso = 880
                break
            case 3:
                valorIngresso = 550
                break
            case 4:
                valorIngresso = 220
                break
        }
    } else if (etapaJogo === 'DT') {
        switch (categoria) {
            case 1:
                valorIngresso = 660
                break
            case 2:
                valorIngresso = 440
                break
            case 3:
                valorIngresso = 330
                break
            case 4:
                valorIngresso = 170 
                break
        }
    } else if (etapaJogo === 'FI') {
        switch (categoria) {
            case 1:
                valorIngresso = 1980
                break
            case 2:
                valorIngresso = 1320
                break
            case 3:
                valorIngresso = 880
                break
            case 4:
                valorIngresso = 330
                break
        }
    }
    console.log('Valor do ingresso: R$ ', valorIngresso)
    console.log('Valor total: R$ ', valorIngresso*quantidade)
}
