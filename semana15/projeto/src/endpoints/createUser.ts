import { Request, Response } from "express"
import { users } from "../data/users"
import { UserAccount } from "../types/UserAccount"


export const createUsers = (req: Request, res: Response) => {
    const { name, cpf, birthdate } = req.body

    if (!name || !cpf || !birthdate) {
        res.status(422).send("Cheque os campos")
    }

    const newUser: UserAccount = {
        name,
        cpf,
        birthdate,
        balance: 0,
        statement: []
    }
    
    if (Number(birthdate.slice(6, 10)) > 2003) {
        res.status(404).send("Você precisa ter mais de 18 anos para abrir uma conta")
    } else {
        users.push(newUser)
        res.status(201).send("Usuário criado com sucesso")
    }






}
