import { Request, Response } from "express"
import insertUser from "../data/insertUser"
import { User } from "../entities/User"


export const createUser = async (
    req: Request,
    res: Response
) => {
    try {
        if (!req.body.name || !req.body.email || !req.body.age) {
            res.status(400).send("Os campos 'nome', 'email' e 'idade' precisam ser preenchidos.")
        }
        
        const tempUser:User = new User(
            req.body.name,
            req.body.email,
            req.body.age
        )
        
        const newUser = tempUser.getUser()

        await insertUser(
            newUser.id,
            newUser.name, 
            newUser.email,
            newUser.age
        )

        res.status(200).send({message:"Usuário criado com sucesso."})


    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }

}