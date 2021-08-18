import connection from "../connection";

export const searchUserById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM aula_55_users
    WHERE id = '${id}';
    `)
    return result[0][0]
};