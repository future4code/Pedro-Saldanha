import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";

export class UserDatabase extends BaseDatabase {
    async createUser(user: User) {
        await BaseDatabase.connection.insert(user).into('aula_59')
    }

    async searchUserByEmail(email: string
    ): Promise<User> {
        try {
            const result = await BaseDatabase.connection("aula_59")
                .select("*")
                .where({ email })

            const newUser = new User(
                result[0].id,
                result[0].name,
                result[0].nickname,
                result[0].email,
                result[0].password,
                result[0].role
            )

            return newUser

        } catch (error) {
            throw new Error(error.slqMessage || error.message)
        }
    }
}
