import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getOwnProfile(req: Request, res: Response) {
    try {
        const token = req.headers.authorization

        if (!token) {
            res.status(422)
            throw new Error("Esse endpoint exige uma autorização passada nos headers")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        const id = tokenData.id

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getUserById(id)

        res.status(200).send({ id: user.getId(), name: user.getName(), email: user.getEmail() })
    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}