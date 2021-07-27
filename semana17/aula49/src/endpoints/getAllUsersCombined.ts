import { Request, Response } from "express"
import selectAllUsersCombined from "../data/selectAllUsersCombined"


export const getAllUsersCombined = async (req: Request, res: Response): Promise<void> => {
    try {
        const q = req.query.q ? req.query.q : "%"

        const sort: string = req.query.sort === "email" || req.query.sort === "type" || req.query.sort === "id" ? req.query.sort : "name"
        const order: string = req.query.order === "ASC" ? "ASC" : "DESC"

        const page: number = req.query.page ? Number(req.query.page) : 1
        const limit: number = req.query.limit ? Number(req.query.limit) : 5
        const offset: number = (page - 1) * limit

        const users = await selectAllUsersCombined(q, sort, order, limit, offset)

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