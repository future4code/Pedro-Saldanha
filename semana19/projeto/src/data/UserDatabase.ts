import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public async findUserByEmail(email: string): Promise<User> {
        try {
            const user = await BaseDatabase.connection('cookenu_user')
                .select('*')
                .where({ email: email })

            return User.toUser(user[0]);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}