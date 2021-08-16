import { app } from "./app";
import { deleteUserController } from "./controller/deleteUserController";
import { getUsersController } from "./controller/getUsersController";
import { loginController } from "./controller/loginController";
import { signupController } from "./controller/signupController";

app.post("/signup", signupController)
app.post("/login", loginController)

app.get("/users", getUsersController)

app.delete("/user/:id", deleteUserController)