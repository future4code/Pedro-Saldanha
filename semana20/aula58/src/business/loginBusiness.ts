import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export async function loginBusiness(email: string, password: string) {

    if (!email || !password) {

        throw new Error("'email' e 'password' devem ser preenchidos.")
    }

    if (email.indexOf('@') === -1) {

        throw new Error("Digite um email válido");

    }

    const userDatabase = new UserDatabase()
    const user = await userDatabase.findUserByEmail(email)

    if (!user) {

        throw new Error("Esse email não está cadastrado.")
    }

    const hashManager = new HashManager()
    const passwordValidation = await hashManager.compare(password, user.getPassword())

    if (!passwordValidation) {

        throw new Error("Senha incorreta.")
    }

    const authenticator = new Authenticator()
    const token = authenticator.generate({ id: user.getId(), role: user.getRole() })

    return token

}
