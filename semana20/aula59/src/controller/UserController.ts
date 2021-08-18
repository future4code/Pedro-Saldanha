import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    async signup(req: Request, res: Response) {
        try {
            const { name, nickname, email, password, role } = req.body
            const userBusiness = new UserBusiness()

            const token: string = await userBusiness.signup({
                name, nickname, email, password, role
            })

            res
                .status(201)
                .send({
                    message: "Usuário criado!",
                    token
                })

        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            const userBusiness = new UserBusiness()
            const token: string = await userBusiness.login(email, password)

            res.send({
                message: "Usuário logado!",
                token
            })

        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}