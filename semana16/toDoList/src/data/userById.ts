import connection from "../connection";
import { User } from "../types";

const userById = async (id: string) => {
    const result = await connection("ToDoListUser")
        .select("*")
        .where({
            id
        });
    return result[0]
};

export default userById