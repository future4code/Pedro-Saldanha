import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getUsersBussiness(token: string) {

    if (!token) {

        throw new Error("Esse endpoint exige uma autorização passada nos headers")
    }

    const authenticator = new Authenticator()
    const tokenData = authenticator.getTokenData(token)


    const userDatabase = new UserDatabase()
    const users = await userDatabase.getUsers()

    return users



}