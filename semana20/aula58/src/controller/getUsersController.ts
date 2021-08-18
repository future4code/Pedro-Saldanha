import { Request, Response } from "express";
import { getUsersBussiness } from "../business/getUsersBusiness";

export async function getUsersController(req: Request, res: Response) {
    try {
        const token = req.headers.authorization as string

       const users = await getUsersBussiness(token)

        res.status(200).send(users)
    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}