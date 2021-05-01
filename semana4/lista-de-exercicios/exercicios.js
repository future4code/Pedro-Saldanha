//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui
  const arrayInvertido = []
  for (let i = array.length - 1; i >= 0; i--){
     arrayInvertido.push(array[i])
  }
  return arrayInvertido
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui
   let arrayParAoQuadrado = []
   for (let numero of array){
      if (numero%2 === 0) {
         arrayParAoQuadrado.push(numero*numero)
      }
   }
   return arrayParAoQuadrado
  }

//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui
   let arrayPar =[]
   for (let numero of array){
      if (numero%2 === 0){
         arrayPar.push(numero)
      }
   }
   return arrayPar
}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   let maiorNumero = 0
   for (numero of array){
      if (numero > maiorNumero) {
         maiorNumero = numero
      }
   }
   return maiorNumero
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
   let respostas = [false, false, true, true, true]
   return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   par = []
   i = 0
    while( i < n*2) {
       if (i%2 === 0){
          par.push(i)
       }
       i++
    }
    return par
}

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
  if (a === b && b === c) {
   return 'Equilátero'
 } else if (a !== b && b !== c && c !== a) {
    return 'Escaleno'
 }
 else {
    return 'Isósceles'
 }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   let maiorNumero;
   let menorNumero;
  
   if(num1 > num2) {
      maiorNumero = num1
      menorNumero = num2
   } else if (num2 > num1) {
      maiorNumero = num2
      menorNumero = num1
   }

   let comparacao = {
      maiorNumero: maiorNumero,
      maiorDivisivelporMenor: false,
      diferenca: maiorNumero - menorNumero
   }

   if (maiorNumero%menorNumero === 0){
      comparacao.maiorDivisivelporMenor = true
   } else {
      comparacao.maiorDivisivelporMenor = false
   }

   return comparacao
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
   let arraySegundoMaiorEMenor = []
   let maiorNumero = 0
   let menorNumero = 1000000
   let segundoMaiorNumero = 0
   let segundoMenorNumero = 1000000

   for (numero of array) {
      if (numero > maiorNumero) {
         maiorNumero = numero
      }
      if (numero < menorNumero) {
         menorNumero = numero
      }
   }
   for (numero of array){
      if (numero > segundoMaiorNumero && numero < maiorNumero) {
         segundoMaiorNumero = numero
      }
      if (numero < segundoMenorNumero && numero > menorNumero) {
         segundoMenorNumero = numero
      }
   }

   arraySegundoMaiorEMenor.push(segundoMaiorNumero, segundoMenorNumero)
   return arraySegundoMaiorEMenor
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
      for (let i = 0; i < array.length; i++){
         for(let j = 0; j < array.length; j++) {
            if (array[j] > array[j+1]) {
               let temp = array[j]
               array[j] = array[j+1]
               array[j+1] = temp
         }
      }
   }
   return array
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   let filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }

   return filme
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   let filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }

   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
   let retangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2*(lado1+lado2),
      area: lado1*lado2
   }

   return retangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
   const pessoaAstro = {
      nome: "Astrodev",
      idade: 25,
      email: "astrodev@future4.com.br",
      endereco: "Rua do Futuro, 4"
   }

   const pessoaAnonima = {
      nome: "ANÔNIMO",
      idade: pessoaAstro.idade,
      email: pessoaAstro.email,
      endereco: pessoaAstro.endereco
   }

   return pessoaAnonima
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
      const arrayAdultos = arrayDePessoas.filter((pessoa) => {
         if (pessoa.idade >= 18) {
            return pessoa
         }
      })
      return arrayAdultos
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   const arrayMenores = arrayDePessoas.filter((pessoa) => {
      if (pessoa.idade < 18) {
         return pessoa
      }
   })
   return arrayMenores
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
   const arrayPor2 = array.map((numero) => {
      return numero*2
   })
   return arrayPor2
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
   const arrayPor2 = array.map((numero) => {
      return numero*2
   })
   const arrayStringPor2 = arrayPor2.map((numero)=> {
      return numero.toString()
   })
   return arrayStringPor2
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
   const arrayParidade = array.map((numero) => {
      if (numero%2 === 0) {
         return `${numero} é par`
      } else if (numero%2 === 1){
         return `${numero} é ímpar`
      }
   })
   return arrayParidade
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
   const pessoasAutorizadas = pessoas.filter((pessoa)=> {
      if (pessoa.idade > 14 && pessoa.idade<60 && pessoa.altura>=1.5){
         return pessoa
      }
   })
   return pessoasAutorizadas
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
   const pessoasNaoAutorizadas = pessoas.filter((pessoa)=> {
      if (pessoa.idade < 14 || pessoa.idade > 60 || pessoa.altura < 1.5){
         return pessoa
      }
   })
   return pessoasNaoAutorizadas
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
   for (let i = 0; i < consultasNome.length; i++){
      for(let j = 0; j < consultasNome.length; j++) {
         if (consultasNome[j] > consultasNome[j+1]) {
            let temp = consultasNome[j]
            consultasNome[j] = consultasNome[j+1]
            consultasNome[j+1] = temp
         }
      }
   }
   return consultasNome
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
   contas.forEach((cliente) => {
      let somaCompras = 0
      cliente.compras.forEach((valor) => {
         somaCompras += valor
      })
      cliente.saldoTotal -= somaCompras
  })
  return contas
}