import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function signup(req: Request, res: Response) {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            res.status(422)
            throw new Error("'name', 'email' e 'password' devem ser preenchidos.")
        }

        if (email.indexOf('@') === -1) {
            res.status(422)
            throw new Error("Digite um email válido");

        }

        if (password.length < 6) {
            res.status(422)
            throw new Error("'password' deve ter ao menos 6 caracteres");
        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)

        if (user) {
            res.status(409)
            throw new Error("Esse email já está cadastrado.")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const newUser = new User(id, name, email, hashPassword)
        await userDatabase.createUser(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generate({ id })

        res.status(200).send({ message: "Usuário criado com sucesso.", token: token })
    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}