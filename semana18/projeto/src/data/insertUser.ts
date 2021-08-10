import connection from "../connection";


export default async function insertUser(
    id: string,
    name: string,
    email: string,
    age: string
) {
    await connection.raw(`
        INSERT INTO labe_commerce_user(id, name, email, age)
        VALUES(
            "${id}",
            "${name}",
            "${email}",
            "${age}"
        );
    `)
}
