import connection from "../connection";

const fetchTable = async (table: string): Promise<any> => {

    const result = await connection.raw(`
        SELECT * FROM labe_commerce_${table};
    `)
    
    return result[0]

}

export default fetchTable;