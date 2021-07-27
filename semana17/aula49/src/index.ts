import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserByType } from "./endpoints/getUserByType";
import { getAndOrderUsers } from "./endpoints/getAndOrderUsers";
import { getLimitedUsers } from "./endpoints/getLimitedUsers";


const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/user", getAllUsers)
app.get("/user/:type", getUserByType)
app.get("/userOrder", getAndOrderUsers)
app.get("/userOrder", getAndOrderUsers)
app.get("/userLimited", getLimitedUsers)




const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error("Failure upon starting server.")
    }
});