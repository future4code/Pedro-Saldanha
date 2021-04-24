// interpretaçao
// 1.
// o código está adicionando o valor de i a variável valor a cada loop, 
// até que o valor de i chegue a 4. após o fim do loop, vai imprimir o valor no console.
// assim o resultado vai ser 10.
// 2.a.   19, 21, 23, 25, 27, 30 
// b. sim, para isso bastaria retirar a condição do numero > 18 e manter o console.log, 
// dessa forma o índice de cada elemento seria acessado e impresso.

// escrita
// 3. a.
// let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for (let numero of arrayOriginal) {
//     console.log(numero)
// }
// b.
// for (let numero of arrayOriginal) {
//     console.log(numero/10)
// }
// c.
// let numeroPar = []
// for (let numero of arrayOriginal) {
//     if(numero%2 === 0) {
//         numeroPar.push(numero)      
//     }
// }
// console.log(numeroPar)  
// d.
// for (let i = 0; i < arrayOriginal.length; i++) {
//     let numero = arrayOriginal[i]
//     console.log('O elemento do índex ' + i + ' é: ' + numero)
// }
// e.
// let maiorNumero = 0
// let menorNumero = 200
// for (let numero of arrayOriginal) {
//     if (numero > maiorNumero) {
//         maiorNumero = numero
//     } else if (numero < menorNumero) {
//         menorNumero = numero
//     }
// }
// console.log('O maior número é ' + maiorNumero + ' e o menor número é ' + menorNumero)

// desafio interpretaçao.
// 0  00  000  0000 

// desafio escrita
// 1.
// const numeroCerto = Number(prompt('Qual número você está pensando?'))
// let tentativas = 1
// let chute
// while (chute !== numeroCerto) {
//     chute = Number(prompt("Tente adivinhar o número que seu amigo está pensando"))
//     if (chute < numeroCerto) {
//         console.log("O número chutado foi: " + chute)
//         console.log("Errrrrou!! é maior")
//     } else if (chute > numeroCerto) {
//         console.log("O número chutado foi: " + chute)
//         console.log("Errrrrou!! é menor")
//     } else if (chute === numeroCerto) {
//         console.log("O número chutado foi: " + chute)
//         console.log("Acertooou!!")
//         console.log("Você precisou de " + tentativas + " tentativas")
//     }
//     tentativas ++
// }

// 2. foi relativamente simples fazer essa alteração com as referências
// dadas no notio. precisei alterar basicamente a primeira linha do código
// retirando o prompt e adicionando o Math.floor com o Math.random no intervalo
// correto dos números. De resto o código se manteve praticamente o mesmo, mudando
// apenas o texto do prompt inicial.
const numeroCerto = Math.floor((Math.random() * 100) + 1)
let tentativas = 1
let chute
while (chute !== numeroCerto) {
    chute = Number(prompt("Tente adivinhar o número do bot"))
    if (chute < numeroCerto) {
        console.log("O número chutado foi: " + chute)
        console.log("Errrrrou!! é maior")
    } else if (chute > numeroCerto) {
        console.log("O número chutado foi: " + chute)
        console.log("Errrrrou!! é menor")
    } else if (chute === numeroCerto) {
        console.log("O número chutado foi: " + chute)
        console.log("Acertooou!!")
        console.log("Você precisou de " + tentativas + " tentativas")
    }
    tentativas ++
}
