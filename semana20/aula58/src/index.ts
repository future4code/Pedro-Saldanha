import { app } from "./app";
import { getUsersController } from "./controller/getUsersController";
import { loginController } from "./controller/loginController";
import { signupController } from "./controller/signupController";

app.post("/signup", signupController)
app.post("/login", loginController)

app.get("/users", getUsersController)