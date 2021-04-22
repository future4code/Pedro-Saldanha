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