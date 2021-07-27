import { Request, Response } from "express"
import selectAndOrder from "../data/selectAndOrder"


export const getAndOrderUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const sort: any = req.query.sort === "name" || req.query.sort === "type" ? req.query.sort : "email"
        const order = req.query.order === "DESC" ? "DESC" : "ASC"

        const users = await selectAndOrder(sort, order)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No users found")
        }

        res.status(200).send(users)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}