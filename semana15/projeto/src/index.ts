import express, {Express} from "express"
import cors from "cors"
import { createUsers } from "./endpoints/createUser"
import { getAllUsers } from "./endpoints/getAllUsers"


const app: Express = express()
app.use(express.json())
app.use(cors())

app.post("/users", createUsers)
app.get("/users", getAllUsers)





app.listen(3003, ()=>{
    console.log("Server is running at port 3003")
})