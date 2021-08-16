import { BaseDatabase } from "./BaseDatabase"



export class MigrationsDatabase extends BaseDatabase {
    public createTables = async () => {
        await BaseDatabase.connection.raw(`
                CREATE TABLE cookenu_user (
                    id VARCHAR(255) NOT NULL PRIMARY KEY,
                    name VARCHAR(50) NOT NULL,
                    email VARCHAR(50) NOT NULL UNIQUE,
                    password VARCHAR(255) NOT NULL
                );
                
                CREATE TABLE cookenu_recipe (
                    id VARCHAR(255) NOT NULL PRIMARY KEY,
                    title VARCHAR(50) NOT NULL,
                    description VARCHAR(255) NOT NULL,
                    createdAt VARCHAR(50) NOT NULL
                );
            `)
            return console.log("tabelas criadas")
    };
}

const migrations = new MigrationsDatabase()

migrations.createTables()
