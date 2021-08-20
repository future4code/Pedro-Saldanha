import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    async signup(req: Request, res: Response) {
        try {
            let message = "Success!"
            const { name, email, password } = req.body

            const userBusiness = new UserBusiness()

            const token = await userBusiness.signup(name, email, password)

            res.status(201).send({ message, token })

        } catch (error) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message

            res.send({ message })
        }
    }

    async login() { }
}