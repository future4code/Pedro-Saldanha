import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { createUser } from "./endpoints/createUser";
import { createProduct } from "./endpoints/createProduct";
import { getUsers } from "./endpoints/getUsers";
import { getProducts } from "./endpoints/getProducts";


const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/user", createUser)
app.post("/product", createProduct)

app.get("/user", getUsers)
app.get("/product", getProducts)




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error("Failure upon starting server.")
    }
});