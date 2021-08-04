import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import { Bank, Transaction } from "./classes";


const app: Express = express();

app.use(express.json());
app.use(cors());




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error("Failure upon starting server.")
    }
});

// ex 1)
// a) O constructor serve para executar ações/métodos ao criar uma nova instância (objeto) daquela determinada classe. Essas ações são declarada dentro do constructor.
// b) Uma vez, pois apenas uma instância dessa clase foi criada
// c) Criando métodos públicos para isso (getters e setters)
export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public getUser() {
        return {
            name: this.name,
            transactions: this.transactions
        }
    }

    public setTransaction(transaction: Transaction) {
        this.transactions.push(transaction)
    }

}

const user1: UserAccount = new UserAccount(
    "12345678945",
    "Joao",
    23,
)

const user2: UserAccount = new UserAccount(
    "78945612398",
    "Maria",
    32,
)

const transaction1: Transaction = new Transaction(
    "Compra onlaine",
    50,
    "02/08/2021",
)
const transaction2: Transaction = new Transaction(
    "Cinema",
    40,
    "01/03/2021",
)

const accounts: Bank = new Bank (
    [user1, user2]
)

user1.setTransaction(transaction1)
user1.setTransaction(transaction2)


console.log(transaction1.getTransaction())

console.log(user1.getUser())

console.log(accounts.getAccount())