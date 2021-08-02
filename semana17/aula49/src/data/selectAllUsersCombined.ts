import connection from "../connection"


export default async function selectAllUsersCombined(q: any, sort: string, order: string, limit: number, offset: number): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio
       WHERE name LIKE '%${q}%'
       OR type LIKE '%${q}%'
       ORDER BY ${sort} ${order}
       LIMIT ${limit}
       OFFSET ${offset};
    `)

    return result[0]
}