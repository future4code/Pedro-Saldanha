import connection from "../connection";

export const searchUserByEmail = async (email: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM aula_55_users
    WHERE email = "${email}";
    `)

    return result[0]
};