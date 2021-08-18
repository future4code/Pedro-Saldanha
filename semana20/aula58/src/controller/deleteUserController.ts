import { Request, Response } from "express";
import { deleteUserBusiness } from "../business/deleteUserBusiness";

export async function deleteUserController(req: Request, res: Response) {
    try {
        const token = req.headers.authorization as string

        const id = req.params.id

        await deleteUserBusiness(token, id)

        res.status(200).send({ message: "Usuário deletado" })
    } catch (error) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}