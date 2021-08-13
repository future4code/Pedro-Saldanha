import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function signup(req: Request, res: Response) {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            res.status(422)
            throw new Error("'name', 'email' e 'password' devem ser preenchidos.")
        }

        const userDatabase = new UserDatabase()
        // const user = await userDatabase.findUserByEmail(email)

        // if (user) {
        //     res.status(409)
        //     throw new Error("Esse email já está cadastrado.")
        // }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()
        console.log(id)
        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)
        console.log(hashPassword)

    } catch (error) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}