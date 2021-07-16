import { CorFavorita } from "./enum1"


const minhaString: string = ""

// // ex1 a) ao atribuir um valor numérico, 
// // o typescript sublinha minha variável indicando que há um erro ali
// // e que aquela variável necessita que o seu valor seja uma string

const meuNumero: number | string = "14"

// // ex1 b) podemos atribuir os dois tipos a variável dessa forma string | number 

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CorFavorita
}

const pessoa1: pessoa = {
    nome: "Pedro",
    idade: 26,
    corFavorita: CorFavorita.VIOLETA
}

const pessoa2 = {
    nome: "Maria",
    idade: 29,
    corFavorita: CorFavorita.LARANJA
}

const pessoa3: pessoa = {
    nome: "Vitória",
    idade: 21,
    corFavorita: CorFavorita.VERDE
}

const pessoa4: pessoa = {
    nome: "José",
    idade: 41,
    corFavorita: CorFavorita.VERMELHO
}

const grupo: pessoa[] = [pessoa1, pessoa2, pessoa3]

console.log(grupo)