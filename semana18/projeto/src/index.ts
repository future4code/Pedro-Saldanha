import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { User } from "./entities/User";
import { Product } from "./entities/Product";
import { Ticket } from "./entities/Ticket";
import { Purchase } from "./entities/Purchase";


const app: Express = express();

app.use(express.json());
app.use(cors());

const user1: User = new User(
    "Joao",
    "joao@joao.com",
    22
)

console.log(user1.getUser())

const product1: Product = new Product(
    "Carteira",
    "Carteira para guardar dinheiro e docs",
    45
)

console.log(product1.getProduct())

const ticket1: Ticket = new Ticket(
    "Passagem Rio-SP",
    "Ponte Aérea",
    200,
    "Rio de Janeiro",
    "São Paulo"
)

console.log(ticket1.getTicket())

const purchase1: Purchase = new Purchase(
    "1628482929529",
    "1628482929535",
    2,
    200
)

console.log(purchase1.getPurchase())




const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error("Failure upon starting server.")
    }
});