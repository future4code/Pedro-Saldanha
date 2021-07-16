import { Request, Response } from "express"
import { users } from "../data"
import { User } from "../types"

export const getUserByType = (req: Request, res: Response) => {

    let result: User[] | undefined = users.filter((user) => {
        return user.type.toLocaleLowerCase() === req.params.type.toLocaleLowerCase()
    })

    if (result) {
        res.status(200).send(result)
    } else {
        res.status(404).send("Categoria de usuário não encontrada")
    }
}