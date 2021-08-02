import connection from "../connection";
import { User } from "../types";

const addUserToTable = async (user: User): Promise<void> => {
    await connection
        .insert(
            user
        )
        .into("ToDoListUser");
};

export default addUserToTable