import connection from "../connection"

export default async function selectLimitedUsers(page: number, limit: number, offset: number): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio
       LIMIT ${limit}
       OFFSET ${offset};
    `)

    return result[0]
}