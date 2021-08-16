import { app } from "./app";
import { signupController } from "./controller/signupController";

app.post("/signup", signupController)