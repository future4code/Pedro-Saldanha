import { Request, Response } from "express";
import { signupBusiness } from "../business/signupBusiness";
import { UserDatabase } from "../data/UserDatabase";
import { User, USER_ROLE } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function signupController(req: Request, res: Response) {
    try {
        const { name, email, password } = req.body
        let role = req.body.role

        const token = await signupBusiness(name, email, password, role)

        res.status(200).send({ message: "Usuário criado com sucesso.", token: token })
    } catch (error) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}