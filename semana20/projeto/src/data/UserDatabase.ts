import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    async create(newUser: User) {
        await BaseDatabase.connection('labook_users')
            .insert({
                id: newUser.getId(),
                name: newUser.getName(),
                email: newUser.getEmail(),
                password: newUser.getPassword()
            })
    }

    async login() { }
}