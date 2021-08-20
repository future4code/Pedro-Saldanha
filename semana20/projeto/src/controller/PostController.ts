import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";

const postBusiness = new PostBusiness()

export class PostController {
    async create(req: Request, res: Response) {
        try {
            let message = "Success!"

            const { photo, description, type } = req.body

            const token: string = req.headers.authorization as string

            await postBusiness.create(token, photo, description, type)

            res.status(201).send({ message })

        } catch (error) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({ message })
        }
    }

    async login(req: Request, res: Response) { }
}