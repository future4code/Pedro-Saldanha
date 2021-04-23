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
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
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
for (let i = 0; i < arrayOriginal.length; i++) {
    let numero = arrayOriginal[i]
    console.log('O elemento do índex ' + i + ' é: ' + numero)
}

