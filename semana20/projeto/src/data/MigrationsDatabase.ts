import { BaseDatabase } from "./BaseDatabase"


export class MigrationsDatabase extends BaseDatabase {
   createTables() {
      BaseDatabase.connection
         .raw(`
         CREATE TABLE labook_users(
            id varchar(255) NOT NULL PRIMARY KEY, 
            name varchar(255) NOT NULL  ,
            email varchar(255) NOT NULL unique,
            password varchar(255) NOT NULL
            );
            
         CREATE TABLE labook_posts(
            id varchar(255) NOT NULL PRIMARY KEY, 
            photo varchar(255) NOT NULL  ,
            description varchar(255) NOT NULL  ,
            type varchar(10) NOT NULL,
            created_at varchar(15) NOT NULL  ,
            author_id varchar(255) NOT NULL , 
            FOREIGN KEY (author_id) REFERENCES labook_users(id)
            );
      `)
         .then(() => {console.log("Tables Created")})
         .catch(console.log)
   }
}

const migrations = new MigrationsDatabase()

migrations.createTables()