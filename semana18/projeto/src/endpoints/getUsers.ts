import { Request, Response } from "express";
import fetchTable from "../data/fetchTable";
import { User } from "../entities/User";


export const getUsers = async (req: Request, res: Response) => {

    try {

        const result = await fetchTable('user')

        if(result.length <= 0){
            throw new Error("Usuários não encontrados");
            
        }

        const users: User[]  = result.map((user: any) => {
            return {
                name: user.name,
                email: user.email,
                age: user.age
            }
        })


        res.status(200).send(users)
    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)
    }
}