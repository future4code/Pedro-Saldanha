import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { User } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { TokenManager } from "../services/TokenManager";

const userDatabase = new UserDatabase()

const tokenManager = new TokenManager()

export class UserBusiness {
    async signup(
        userData: any
    ): Promise<string> {
        if (
            !userData.name ||
            !userData.nickname ||
            !userData.email ||
            !userData.password ||
            !userData.role
        ) {
            throw new Error('Preencha os campos "name","nickname", "email" e "password"')
        }

        const hashManager = new HashManager()
        const cypherPassword = await hashManager.hash(userData.password);
        const idGenerator = new IdGenerator()

        const newUser = {
            ...userData,
            password: cypherPassword,
            id: idGenerator.generate()
        }

        await userDatabase.createUser(newUser)


        const token: string = tokenManager.generate({
            id: newUser.id,
            role: userData.role
        })

        return token
    }

    async login(
        email: string,
        password: string
    ): Promise<string> {
        if (!email || !password) {
            throw new Error("'email' e 'senha' são obrigatórios")
        }

        const user: User = await userDatabase.searchUserByEmail(email)

        if (!user) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const hashManager = new HashManager()
        const passwordIsCorrect: boolean = await hashManager.compare(password, user.getPassword())

        if (!passwordIsCorrect) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const token: string = tokenManager.generate({
            id: user.getEmail(),
            role: user.getRole()
        })

        return token
    }
}