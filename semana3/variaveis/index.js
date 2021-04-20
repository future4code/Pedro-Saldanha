// interpretação:
// 1.
// console.log(b) --> 10
// console.log(a, b) --> 10, 5
// 2.
// console.log(a, b, c) --> 10, 10, 10

// escrita
// 1.
// const nome;
// let idade;
// console.log(nome, idade) 
// recebi um erro de sintaxe, pois não é possível declarar uma variável const sem atribuir valor, precisaria ser let para retornar undefined.

// const nome = prompt("qual o seu nome?")
// let idade = prompt("qual a sua idade?")
// console.log(nome, idade) 
// resultado -->pedro 26

// console.log(typeof nome, typeof idade)
// as duas varáveis são strings

// console.log("Olá "+ nome +", você tem "+ idade +" anos.")
// resultado -->Olá pedro, você tem 26 anos.

// 2.
// const nome = prompt("Qual seu nome?")
// let endereço = prompt("Qual seu endereço?")
// let cor = prompt("Qual sua cor preferida?")
// let comida = prompt("Qual sua comida preferida?")
// let bebida = prompt("Qual sua bebida preferida?")
// console.log("1.Qual o seu nome?")
// console.log ("Resposta: "+ nome)
// console.log("2.Qual o seu endereço?")
// console.log("Resposta: "+ endereço)
// console.log("3.Qual a sua cor preferida?")
// console.log ("Resposta: "+ cor)
// console.log("4.Qual a sua comida preferida?")
// console.log("Resposta: "+ comida)
// console.log("5.Qual a sua bebida preferida?")
// console.log("Resposta: "+ bebida)

// 3.
// let array = ["pizza", "macarrão", "pão", "arrozfeijão", "milho"]
// console.log(array)

// console.log("Essas são minhas comidas preferidas:")
// console.log(array[0])
// console.log(array[1])
// console.log(array[2])
// console.log(array[3])
// console.log(array[4])

// let comidaUsuario = prompt("Qual sua comida preferida?")
// array[1] = comidaUsuario
// console.log(array[0])
// console.log(array[1])
// console.log(array[2])
// console.log(array[3])
// console.log(array[4])

// 4.
let perguntas = ["Você está de roupa azul hoje?", "Você está em casa agora?", "Já bebeu água hoje?"]
let respostas = ["Não", "Sim", "Sim"]
respostas[0] = false
respostas[1] = true
respostas[2] = true
console.log(perguntas[0] + " " + respostas[0])
console.log(perguntas[1] + " " + respostas[1])
console.log(perguntas[2] + " " + respostas[2])
// resultado: Você está de roupa azul hoje? false - Você está em casa agora? true - Já bebeu água hoje? true


