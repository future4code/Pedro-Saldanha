import connection from "../connection";


export default async function insertProduct(
    id: string,
    name: string,
    description: string,
    price: string
) {
    await connection.raw(`
        INSERT INTO labe_commerce_product(id, name, description, price)
        VALUES(
            "${id}",
            "${name}",
            "${description}",
            "${price}"
        );
    `)
}
