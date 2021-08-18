import { UserDatabase } from "../data/UserDatabase";
import { User, USER_ROLE } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function signupBusiness(name: string, email: string, password: string, role?: any) {

    if (!name || !email || !password) {
        throw new Error("'name', 'email', 'password' e 'role' devem ser preenchidos.")
    }

    if (email.indexOf('@') === -1) {
        throw new Error("Digite um email válido");

    }

    if (password.length < 6) {
        throw new Error("'password' deve ter ao menos 6 caracteres");
    }

    const userDatabase = new UserDatabase()
    if (!role || role !== USER_ROLE.ADMIN) {
        role = USER_ROLE.NORMAL
    }



    const idGenerator = new IdGenerator()
    const id = idGenerator.generate()

    const hashManager = new HashManager()
    const hashPassword = await hashManager.hash(password)
    const newUser = new User(id, name, email, hashPassword, role)
    await userDatabase.createUser(newUser)
    const authenticator = new Authenticator()
    const token = authenticator.generate({ id, role })

    return token
}