import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";


const userDatabase = new UserDatabase()
const hashManager = new HashManager()
const tokenManager = new TokenManager()

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

        const cypherPassword = await hashManager.hash(password);

        const newUser = new User(id, name, email, cypherPassword)

        await userDatabase.create(newUser)

        const token: string = tokenManager.generate({ id })

        return token
    }

    async login(email: string, password: string) {

        if (!email || !password) {
            throw new Error('"email" and "password" must be provided')
        }

        if (email.indexOf('@') === -1) {
            throw new Error("'email' must be a valid email");

        }

        const checkUser: User = await userDatabase.findUserByEmail(email)

        if (!checkUser) {
            throw new Error("Invalid credentials")
        }

        const user: User = new User(
            checkUser.getId(),
            checkUser.getName(),
            checkUser.getEmail(),
            checkUser.getPassword()
        )

        const passwordIsCorrect: boolean = await hashManager.compare(password, user.getPassword())

        if (!passwordIsCorrect) {
            throw new Error("Invalid credentials")
        }

        const token: string = tokenManager.generate({
            id: user.getId()
        })

        return token
    }

}