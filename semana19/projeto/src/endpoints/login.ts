import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body

        if ( !email || !password) {
            res.status(422)
            throw new Error("'email' e 'password' devem ser preenchidos.")
        }

        if (email.indexOf('@') === -1) {
            res.status(422)
            throw new Error("Digite um email válido");

        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)

        if (!user) {
            res.status(409)
            throw new Error("Esse email não está cadastrado.")
        }

        const hashManager = new HashManager()
        const passwordValidation = await hashManager.compare(password, user.getPassword())

        if(!passwordValidation) {
            res.status(401)
            throw new Error("Senha incorreta.")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generate({ id: user.getId() })

        res.status(200).send({ token: token })
    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}