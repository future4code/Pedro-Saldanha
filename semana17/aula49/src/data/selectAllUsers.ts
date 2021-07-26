import connection from "../connection"


export default async function selectAllUsers(name: any): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio
       WHERE name LIKE '%${name}%';
    `)

    return result[0]
}