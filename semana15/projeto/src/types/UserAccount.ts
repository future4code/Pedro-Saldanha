export type UserAccount = {
    name: string
    cpf: number
    birthdate: string
    balance: number
    statement: Transaction[] | []
}

export type Transaction = {
    value: number
    date: string
    description: string
}