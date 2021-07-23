import connection from "../connection";

const editUser = async ( id: string, name?: string, nickname?: string, email?: string) => {
    
    if(name){
        await connection("ToDoListUser")
        .update(
            {
                name: name,
            }
        )
        .where(
            {
                id
            }
        );
    }

    if(nickname){
        await connection("ToDoListUser")
        .update(
            {
                nickname: nickname,
            }
        )
        .where(
            {
                id
            }
        );
    }
    
    if(email){
        await connection("ToDoListUser")
        .update(
            {
                email: email,
            }
        )
        .where(
            {
                id
            }
        );
    }
};

export default editUser