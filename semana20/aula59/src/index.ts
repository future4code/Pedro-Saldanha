import { app } from "./controller/app"
// import { createTask } from './controller/task/createTask'
// import { getTaskById } from './controller/task/getTaskById'
import { userRouter } from "./routes/userRouter"



app.use("/user", userRouter)

// app.put('/task', createTask)
// app.get('/task/:id', getTaskById)

