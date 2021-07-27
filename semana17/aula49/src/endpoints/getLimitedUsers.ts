import { Request, Response } from "express"
import selectLimitedUsers from "../data/selectLimitedUsers"


export const getLimitedUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const page: number = req.query.page ? Number(req.query.page) : 1
        const limit: number = req.query.limit ? Number(req.query.limit) : 5
        const offset: number = (page - 1) * limit

        const users = await selectLimitedUsers(page, limit, offset)

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