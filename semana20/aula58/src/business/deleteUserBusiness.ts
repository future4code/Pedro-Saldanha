import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export async function deleteUserBusiness(token: string, id: string) {

    if (!token) {
        throw new Error("Esse endpoint exige uma autorização passada nos headers")
    }

    const authenticator = new Authenticator()
    const tokenData = authenticator.getTokenData(token)

    if (tokenData.role !== "ADMIN") {
        throw new Error("Você não tem autorização para fazer isso")
    }


    if (!id) {
        throw new Error("É necessário passar o Id do perfil a ser deletado como parâmetro")
    }

    const userDatabase = new UserDatabase()
    const user = await userDatabase.findUserById(id)

    if (!user) {
        throw new Error("Usuário não encontrado")
    }

    await userDatabase.deleteUser(id)

}