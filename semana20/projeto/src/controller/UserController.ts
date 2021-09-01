import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

const userBusiness = new UserBusiness()

export class UserController {
    async signup(req: Request, res: Response) {
        try {
            let message = "Success!"
            const { name, email, password } = req.body

            const token = await userBusiness.signup(name, email, password)

            res.status(201).send({ message, token })

        } catch (error) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message

            res.send({ message })
        }
    }

    async login(req: Request, res: Response) {
        try {
            let message = "Success!"

            const { email, password } = req.body

            const token = await userBusiness.login(email, password)

            res.status(200).send({ message, token })

        } catch (error) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400

            res.send({ message })
        }
    }
}