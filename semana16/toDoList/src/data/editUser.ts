import connection from "../connection";

const editUser = async (name: string, nickname: string, id: string) => {
    await connection("ToDoListUser")
        .update(
            {
                name: name,
                nickname: nickname
            }
        )
        .where(
            {
                id
            }
        );
};

export default editUser