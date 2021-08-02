import connection from "../connection"

export default async function selectAndOrder(sort: string, order: string): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio
       ORDER BY ${sort} ${order};
    `)

    return result[0]
}