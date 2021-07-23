import { Request, Response } from "express"
import { addUserToTable } from "../data/addUserToTable";


export const createUser = async (req: Request, res: Response) => {

    try {

        if (!req.body.name || !req.body.nickname || !req.body.email) {
            res.status(400)
                .send("Ocorreu algum erro, verifique os campos");
        }

        await addUserToTable(
            {
                id: Date.now().toString(),
                name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email
            }
        )
        res.status(200)
            .send("Usuário criado");

    } catch (error) {
        res.status(400)
            .send({
                message: error.message || error.sqlMessage
            });
    }
};