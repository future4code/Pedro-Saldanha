import { Request, Response } from "express";
import { getData } from "../data/getData";
import { searchUserById } from "../data/searchUserById";


export default async function getProfile(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const token: string = req.headers.authorization as string
        console.log(token)
        const authenticationUser = getData(token)
        console.log(authenticationUser)
        const user = await searchUserById(authenticationUser.id)
        console.log(user)
        res.status(200).send({ id: user.id, email: user.email })

    } catch (error) {

        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}