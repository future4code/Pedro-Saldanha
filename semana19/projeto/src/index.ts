import { app } from "./app";
import { getOwnProfile } from "./endpoints/getOwnProfile";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";

app.post("/signup", signup)
app.post("/login", login)

app.get("/user/profile", getOwnProfile)