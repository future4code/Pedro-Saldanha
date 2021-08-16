import { app } from "./app";
import { loginController } from "./controller/loginController";
import { signupController } from "./controller/signupController";

app.post("/signup", signupController)
app.post("/login", loginController)