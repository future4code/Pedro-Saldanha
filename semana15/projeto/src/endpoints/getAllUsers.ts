import { Request, Response } from "express"
import { users } from "../data/users"

export const getAllUsers = (req: Request, res: Response) => {
    res.status(200).send(users)
}