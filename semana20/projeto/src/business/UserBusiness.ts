import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";


const userDatabase = new UserDatabase()

export class UserBusiness {
    async signup(name: string, email: string, password: string) {
        if (!name || !email || !password) {
            throw new Error("'name', 'email' and 'password' must be provided")
        }
        
        if (email.indexOf('@') === -1) {
            throw new Error("'email' must be a valid email");

        }

        if (password.length < 6) {
            throw new Error("'password' must be at least 6 characters long");
        }

        const idGenerator = new IdGenerator()
        const id: string = idGenerator.generate()

        const hashManager = new HashManager()
        const cypherPassword = await hashManager.hash(password);

        const newUser = new User(id, name, email, cypherPassword)

        await userDatabase.create(newUser)

        const tokenManager = new TokenManager()
        const token: string = tokenManager.generate({ id })

        return token
    }

    async login() { }
}