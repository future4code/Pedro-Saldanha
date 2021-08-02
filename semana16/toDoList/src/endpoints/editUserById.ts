import { Request, Response } from "express"
import editUser from "../data/editUser";


export const editUserById = async (req: Request, res: Response) => {

    try {

        if (req.body.name === "" || req.body.nickname === "" || req.body.email === "") {
            res.status(400)
                .send("Nenhum campo pode estar em branco");
        }

        if (!req.body.name && !req.body.nickname && !req.body.email) {
            res.status(400)
                .send("Preencha ao menos um campo");
        }

        await editUser(
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email
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