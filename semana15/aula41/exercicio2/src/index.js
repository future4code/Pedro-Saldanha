const operation = process.argv[2]
const num1 = process.argv[3]
const num2 = process.argv[4]

if(operation === 'add'){
    console.log(`Resposta: ${Number(num1) + Number(num2)}`)
} else if(operation === 'sub'){
    console.log(`Resposta: ${Number(num1) - Number(num2)}`)
} else if(operation === 'mult'){
    console.log(`Resposta: ${Number(num1) * Number(num2)}`)
} else if(operation === 'div'){
    console.log(`Resposta: ${Number(num1) / Number(num2)}`)
} else {
    console.log('Operação não identificada. Escolha entre: add, sub, mult ou div.')
}