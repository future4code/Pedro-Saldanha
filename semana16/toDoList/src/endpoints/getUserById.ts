import { Request, Response } from "express"
import userById from "../data/userById";
import { User } from "../types";


export const getUserById = async (req: Request, res: Response) => {

    try {

        const user: User = await userById(req.params.id)

        if (!user) {
            res.status(404)
                .send({
                    message: "Usuário não encontrado"
                })
        }

        res.status(200)
            .send({
                id: user.id,
                nickname: user.nickname
            });

    } catch (error) {
        res.status(400)
            .send({
                message: error.message || error.sqlMessage
            });
    }
};