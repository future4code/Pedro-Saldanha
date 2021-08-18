import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {
    public createUser = async (user: User) => {
        await BaseDatabase.connection
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            })
            .into('User_Arq');
    };

    public async findUserByEmail(email: string): Promise<User> {

        const user = await BaseDatabase.connection('User_Arq')
            .select('*')
            .where({ email: email })

        return user[0] && User.toUser(user[0]);
    }

    public async findUserById(id: string): Promise<User> {

        const user = await BaseDatabase.connection('User_Arq')
            .select('*')
            .where({ id: id })

        return user[0] && User.toUser(user[0]);
    }

    public async getUsers(): Promise<User[]> {

        const users = await BaseDatabase.connection('User_Arq')
            .select('*')

        return users;
    }

    public async deleteUser(id: string): Promise<void> {

        await BaseDatabase.connection('User_Arq')
            .select('*')
            .delete()
            .where({ id: id })

    }
}
