import { Request, Response } from "express"
import connection from "../connection";
import { User } from "../types";

const addUserToTable = async (user: User): Promise<void> => {
    await connection
        .insert(
            user
        )
        .into("ToDoListUser");
};

export const createUser = async (req: Request, res: Response) => {

    try {
  
        await addUserToTable(
            {
                id: Date.now().toString(),
                name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email
            }
        )
        res.status(200).send("Usuário criado");
    } catch (error) {
        //deu tudo errado
        res.status(400).send("Ocorreu algum erro, verifique os campos");
    }
};