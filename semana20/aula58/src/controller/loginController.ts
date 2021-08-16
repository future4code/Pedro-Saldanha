import { Request, Response } from "express";
import { loginBusiness } from "../business/loginBusiness";


export async function loginController(req: Request, res: Response) {
    try {
        const { email, password } = req.body

        const token = await loginBusiness(email, password)

        res.status(200).send({ token: token })
    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}
