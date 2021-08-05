import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";


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


class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

    public introduceYourself(name: string): string {
        return `Olá, sou ${name}. Bom dia!`
    }
}

const user1: User = new User(
    "id1",
    "joao@joao.com",
    "Joao",
    "123456"
)
console.log(user1.getId())
console.log(user1.getEmail())
console.log(user1.getName())

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

const customer1: Customer = new Customer(
    "id2",
    "maria@maria.com",
    "Maria",
    "654321",
    "789123456789321"
)

console.log(customer1.getId())
console.log(customer1.getEmail())
console.log(customer1.getName())
console.log(customer1.purchaseTotal)
console.log(customer1.getCreditCard())
console.log(
    customer1.introduceYourself(
        customer1.getName()
    )
)


type employees = {
    salary: number;
}

type salesperson = {
    totalSales: number;
}