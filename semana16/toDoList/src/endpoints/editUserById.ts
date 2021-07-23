import { Request, Response } from "express"
import editUser from "../data/editUser";


export const editUserById = async (req: Request, res: Response) => {

    try {

        if (!req.body.name || !req.body.nickname || !req.params.id) {
            res.status(400)
                .send("Ocorreu algum erro, verifique os campos");
        }

        await editUser(
            req.body.name,
            req.body.nickname,
            req.params.id
        )
        res.status(200)
            .send("Usuário atualizado");

    } catch (error) {
        res.status(400)
            .send({
                message: error.message || error.sqlMessage
            });
    }
};