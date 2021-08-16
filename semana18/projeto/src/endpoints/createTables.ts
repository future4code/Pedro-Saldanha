import { Request, Response } from "express"
import connection from "../connection";


export default async function createTables(req: Request, res: Response): Promise<void> {
    try {

        await connection.raw(`
            CREATE TABLE labe_commerce_user (
            id VARCHAR(50) NOT NULL PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            email VARCHAR(50) NOT NULL UNIQUE,
            age INT NOT NULL
            );
            
            CREATE TABLE labe_commerce_product (
            id VARCHAR(50) NOT NULL PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            description VARCHAR(255) NOT NULL,
            price FLOAT NOT NULL
            );
    `)

        res.status(200).send({ message: "tabelas criadas" })
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}
