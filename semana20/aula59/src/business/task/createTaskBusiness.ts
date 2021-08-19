// import { insertTask } from "../../data/task/insertTask";
// import { taskData } from "../../model/task";
// import { IdGenerator } from "../../services/IdGenerator";

// export const createTaskBusiness = async (
//    taskData: taskData
// ) => {

//    if (
//       !taskData.title ||
//       !taskData.description ||
//       !taskData.deadline ||
//       !taskData.authorId
//    ) {
//       throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
//    }
//    const idGenerator = new IdGenerator()
//    const id: string = idGenerator.generate()

//    await insertTask({
//       id,
//       ...taskData
//    })
// }